import React from 'react';
import ReactDOM from 'react-dom';
import "../styles/main.scss";
import TecLogo from '../Images/MainLogos/tecLogo.png';
import SupLogo from '../Images/MainLogos/supermercados.png';
import BebLogo from '../Images/MainLogos/whiskey.png';
import FerLogo from '../Images/MainLogos/ferramentas.png';
import SauLogo from '../Images/MainLogos/cuidados.png';
import EspLogo from '../Images/MainLogos/corrida.png';
import ModaLogo from '../Images/MainLogos/moda.png';

function MainTopNavegacao() {
    return <div>
        <div className='MainIntroductionNavBar'>
            <div className='MainLogos'>
            <div>
                <img src={TecLogo} alt="tecnologia" />
                <p>Tecnologia</p>
            </div>
            <div>
                <img src={SupLogo} alt="supermercados" />
                <p>Supermercado</p>
            </div>
            <div>
                <img src={BebLogo} alt="bebidas" />
                <p>Bebidas</p>
            </div>
            <div>
                <img src={FerLogo} alt="ferramentas" />
                <p>Ferramentas</p>
            </div>
            <div>
                <img src={SauLogo} alt="saude" />
                <p>Saúde</p>
            </div>
            <div>
                <img src={EspLogo} alt="esportes" />
                <p>Esportes e Fitness</p>
            </div>
            <div>
                <img src={ModaLogo} alt="moda" />
                <p>Moda</p>
            </div>
            </div>
        </div>
        <div className='ProdutosRelacionados'>
            <div className='ProdutosRelacionadosTitle'>
                <h1>Produtos relacionados</h1>
            </div>
            <div className='ProdutosRelacionadosNav'>
                <nav>
                    <a href="">CELULAR</a>
                    <a href="">ACESSÓRIOS</a>
                    <a href="">TABLETS</a>
                    <a href="">NOTEBOOKS</a>
                    <a href="">TVS</a>
                    <a href="">VER TODOS</a>
                </nav>
            </div>
        </div>
    </div>
}

export default MainTopNavegacao;