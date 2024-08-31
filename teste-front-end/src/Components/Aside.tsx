import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import "../styles/main.scss";
import LogoVtex from '../Images/Header/logoVtex.png';

function Aside() {
    // Configurações do carrossel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div>
            <div className='parceirosDiv'>
                <div className='ImagemParceiros'>
                    <div className='ParceirosOverlay'>
                        <h2 className='ParceirosH2'>Parceiros</h2>
                        <p className='ParceirosP'>Lorem ipsum, dolor sit amet</p>
                        <button className='buttonAside'>Confira</button>
                    </div>
                </div>
                <div className='ImagemParceiros'>
                    <div className='ParceirosOverlay'>
                        <h2 className='ParceirosH2'>Parceiros</h2>
                        <p className='ParceirosP'>Lorem ipsum, dolor sit amet</p>
                        <button className='buttonAside'>Confira</button>
                    </div>
                </div>
            </div>
            <div className='AsideText'>
                <h2>Produtos relacionados</h2>
                <p>Ver todos</p>
            </div>
            <div className='parceirosDiv'>
                <div className='ImagemParceiros'>
                    <div className='ParceirosOverlay'>
                        <h2 className='ParceirosH2'>Parceiros</h2>
                        <p className='ParceirosP'>Lorem ipsum, dolor sit amet</p>
                        <button className='buttonAside'>Confira</button>
                    </div>
                </div>
                <div className='ImagemParceiros'>
                    <div className='ParceirosOverlay'>
                        <h2 className='ParceirosH2'>Parceiros</h2>
                        <p className='ParceirosP'>Lorem ipsum, dolor sit amet</p>
                        <button className='buttonAside'>Confira</button>
                    </div>
                </div>
            </div>
            <div className='NaveguePorMarcas'>
                <div className='MarcasTitle'>
                    Navegue por Marcas
                </div>
                <div className='MarcasLogo'>
                    <Slider {...settings}>
                        <div><img src={LogoVtex} alt="Marca" /></div>
                        <div><img src={LogoVtex} alt="Marca" /></div>
                        <div><img src={LogoVtex} alt="Marca" /></div>
                        <div><img src={LogoVtex} alt="Marca" /></div>
                        <div><img src={LogoVtex} alt="Marca" /></div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Aside;
