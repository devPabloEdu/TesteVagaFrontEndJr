import React, { useState, useEffect, ChangeEvent } from 'react';
import "../styles/main.scss";

// Definindo o tipo do produto
interface Product {
    photo: string;
    productName: string;
    descriptionShort: string;
    descriptionLong?: string;
    price: number;
}

function ProductList() {
    // Definindo os estados com seus tipos
    const [products, setProducts] = useState<Product[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [modalProduct, setModalProduct] = useState<Product | null>(null); // Estado para o produto no modal
    const [quantity, setQuantity] = useState<number>(1); // Estado para a quantidade selecionada

    const itemsPerPage = 4;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/teste-front-end/junior/tecnologia/lista-produtos/produtos.json');
                if (!response.ok) {
                    throw new Error('Erro na solicitação');
                }
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const nextSlide = () => {
        if (currentIndex < products.length - itemsPerPage) {
            setCurrentIndex(currentIndex + itemsPerPage);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - itemsPerPage);
        }
    };

    const openModal = (product: Product) => {
        setModalProduct(product);
        setQuantity(1); // Reseta a quantidade ao abrir o modal
    };

    const closeModal = () => {
        setModalProduct(null);
    };

    const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(e.target.value));
    };

    return (
        <div className="carousel-container">
            <button onClick={prevSlide} disabled={currentIndex === 0}>❮</button>
            <div className="ProductsList">
                {products.length > 0 ? (
                    products.slice(currentIndex, currentIndex + itemsPerPage).map((product, index) => (
                        <div key={index} className={`Product${index + 1}`} onClick={() => openModal(product)}>
                            <img src={product.photo} alt={product.productName} />
                            <p className='DescricaoProduto'>{product.descriptionShort}</p>
                            <p className='PriceProduct'>R$ {product.price.toFixed(2).replace('.', ',')}</p>
                            <p className='DescontoProduct'>ou 2X de R$49,95 sem juros</p>
                            <p className='FreteGratis'>Frete grátis</p>
                            <button className='BuyButton'>COMPRAR</button>
                        </div>
                    ))
                ) : (
                    <p>Carregando produtos...</p>
                )}
            </div>
            <button className="buttonNext" onClick={nextSlide} disabled={currentIndex >= products.length - itemsPerPage}>❯</button>

            {/* Modal */}
            {modalProduct && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>✖</button>
                        <img src={modalProduct.photo} alt={modalProduct.productName} className="modal-image" />
                        <h2>{modalProduct.productName}</h2>
                        <p>{modalProduct.descriptionLong || modalProduct.descriptionShort}</p>
                        <p className='PriceProduct'>R$ {modalProduct.price.toFixed(2).replace('.', ',')}</p>
                        <p className='DescontoProduct'>ou 2X de R$49,95 sem juros</p>
                        <p className='FreteGratis'>Frete grátis</p>
                        <div className="quantity-selector">
                            <label htmlFor="quantity">Quantidade:</label>
                            <input 
                                type="number" 
                                id="quantity" 
                                value={quantity} 
                                onChange={handleQuantityChange} 
                                min="1" 
                                max="99"
                            />
                        </div>
                        <button className='BuyButton'>COMPRAR</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductList;
