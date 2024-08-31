import React from 'react';
import ReactDOM from 'react-dom';
import "../styles/main.scss";
import SeguroLogo from '../Images/HeaderTopInfo/escudo.png'; 
import FreteGratis from '../Images/HeaderTopInfo/caminhao.png';
import CreditCard from '../Images/HeaderTopInfo/credit-card.png';
import LogoVtex from '../Images/Header/logoVtex.png';
import Lupa from '../Images/Header/lupa.png';
import Vector from '../Images/Header/Vector.png';
import Heart from '../Images/Header/Heart.png';
import UserCircle from '../Images/Header/UserCircle.png';
import ShoppingCart from '../Images/Header/ShoppingCart.png';

function Header() {
   return  <div>
    <div className='HeaderTopInfo'>
    <p>
        <img src={SeguroLogo} alt='Ícone de segurança' className='LogoHeaderTopInfo' />
        Compra <span className='SpanRosa'>100% segura</span>
        </p> 
    <p>
        <img src={FreteGratis} alt='Ícone de segurança' className='LogoHeaderTopInfo' />
        <span className='SpanRosa'>Frete Grátis </span> acima de R$200
        </p> 
    <p>
        <img src={CreditCard} alt='Ícone de segurança' className='LogoHeaderTopInfo' />
        <span className='SpanRosa'>Parcele</span> suas compras
        </p>
    </div> 
    <div className='HeaderBottom'>
        <img src={LogoVtex} alt="LogoVtex" />
        <div className="search-box">
           <input type="text" className="search-input" placeholder="O oque você está buscando?" />
           <button className="search-button">
             <img src={Lupa} alt="lUPAdePesquisa" />
           </button>
         </div>
        <img src={Vector} alt="Vector" className='HeaderSearchLogos' />
        <img src={Heart} alt="Coração" className='HeaderSearchLogos'/>
        <img src={UserCircle} alt="Usuario" className='HeaderSearchLogos'/>
        <img src={ShoppingCart} alt="Carrinho" className='HeaderSearchLogos'/>
    </div>
    <div className='HeaderNav'>
        <nav>
            <a href="">Todas as Categorias</a>
            <a href="">Supermercados</a>
            <a href="">Livros</a>
            <a href="">Modas</a>
            <a href="">Lançamentos</a>
            <a href="">Ofertas do dia</a>
            <a href="">Assinatura</a>
        </nav>
    </div>
    </div>

    
}

export default Header;