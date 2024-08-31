import React from 'react';
import ReactDOM from 'react-dom';
import "../styles/main.scss";
import FacebookLogo from '../Images/Footer/SobreNos/facebook.png';
import InstaLogo from '../Images/Footer/SobreNos/instagram.png';
import YoutubeLogo from '../Images/Footer/SobreNos/youtube.png';
import Visa from '../Images/Footer/FormasDePag/visa.png';
import Alelo from '../Images/Footer/FormasDePag/alelo.png';
import Dinners from '../Images/Footer/FormasDePag/dinners.png';
import Ifood from '../Images/Footer/FormasDePag/ifood.png';
import Mastercard from '../Images/Footer/FormasDePag/mastercard.png';
import PIX from '../Images/Footer/FormasDePag/pix.png';
import Amex from '../Images/Footer/FormasDePag/amex.png';
import Ticket from '../Images/Footer/FormasDePag/ticket.png';
import Sodexo from '../Images/Footer/FormasDePag/sodexo.png';
import LogoFooterBot from "../Images/Footer/footerBottom/logoFooterBottom.png";


function Footer() {
    return <div>
        <div className='FooterTop'>
            <div className='SobreNós'>
               <div className='TextSobreNós'> 
               <h3>Sobre nós</h3>
                <a>CONHEÇA</a>
                <a>COMO COMPRAR</a>
                <a>INDICAÇÃO E DESCONTO</a>
                </div>
                <div className='SobreNosImagens'>
                    <img src={FacebookLogo} alt="fblogo" />
                    <img src={InstaLogo} alt="instalogo" />
                    <img src={YoutubeLogo} alt="youtubelogo" />
                </div>
            </div>
            <div className='InformacoesUteis'>
                <h3>INFORMAÇÕES ÚTEIS</h3>
                <a href="">FALE CONOSCO</a>
                <a href="">DÚVIDAS</a>
                <a href="">PRAZOS DE ENTREGA</a>
                <a href="">FORMAS DE PAGAMENTO</a>
                <a href="">POLÍTICA DE PRIVACIDADE</a>
                <a href="">TROCAS E DEVOLUÇÕES</a>
            </div>
            <div className='FormasDePagamento'>
                <div className='FormasText'>
                    <h3>FORMAS DE PAGAMENTO</h3>
                </div>
                <div className='FormasImg'>
                    <div>
                        <img src={Visa} alt="VISA" />
                        <img src={Alelo} alt="ALELO" />
                        <img src={Dinners} alt="Dinners" />
                    </div>
                    <div>
                        <img src={Ifood} alt="Ifood" />
                        <img src={Mastercard} alt="Mastercard" />
                        <img src={PIX} alt="PIX" />
                    </div>
                    <div>
                        <img src={Amex} alt="Amex" />
                        <img src={Ticket} alt="Ticket" />
                        <img src={Sodexo} alt="Sodexo" />
                    </div>

                </div>
            </div>
            <div className='footerInput'>
                <div>
                    <div className='textFooterInput'>
                        <p>CADASTRE-SE E RECEBA NOSSAS<br />
                        <span>NOVIDADES E PROMOÇÕES</span></p>
                        <p className='inpuTextSPAN'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi v</p>
                    </div>
                    <div className='footerInputContainer'>
                        <input type="text" />
                        <button>OK</button>
                        </div>
                </div>
            </div>
        </div>
        <div className='FooterBotoom'>
            <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos<br />É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
            <img src={LogoFooterBot} alt="EMPRESAS-FOOTER" />
        </div>
    </div>
    
}

export default Footer;