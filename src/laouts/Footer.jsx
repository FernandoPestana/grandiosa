import React from 'react'
import './styles/Footer.scss'

const Footer = () => {
  return (
    <div className='footer__container'>
        <div className="footer">
            <div className='footer__section1'>
                <div className='footer__img-container'>
                    <img className='footer__img' src="https://www.grandiosanatural.com/wp-content/uploads/2022/03/cropped-cropped-LOGO-TIENDA-230x58.png"  alt="Grandiosa | Tienda Oficial" decoding="async" srcSet="https://www.grandiosanatural.com/wp-content/uploads/2022/03/cropped-cropped-LOGO-TIENDA-230x58.png 230w, https://www.grandiosanatural.com/wp-content/uploads/2022/03/cropped-cropped-LOGO-TIENDA-300x76.png 300w, https://www.grandiosanatural.com/wp-content/uploads/2022/03/cropped-cropped-LOGO-TIENDA-1024x259.png 1024w, https://www.grandiosanatural.com/wp-content/uploads/2022/03/cropped-cropped-LOGO-TIENDA-768x194.png 768w, https://www.grandiosanatural.com/wp-content/uploads/2022/03/cropped-cropped-LOGO-TIENDA-1320x334.png 1320w, https://www.grandiosanatural.com/wp-content/uploads/2022/03/cropped-cropped-LOGO-TIENDA-600x152.png 600w, https://www.grandiosanatural.com/wp-content/uploads/2022/03/cropped-cropped-LOGO-TIENDA.png 1408w" sizes="(max-width: 230px) 100vw, 230px" />
                </div>
                <div className='footer__social-container'>
                    <div className="footer__social-logo"><em className='bx bxl-facebook'></em></div>
                    <div className="footer__social-logo"><em className='bx bxl-instagram'></em></div>
                    <div className="footer__social-logo"><em className='bx bxl-whatsapp'></em></div>
                </div>
            </div>
            <div className='footer__section2'>
                <div className="footer__section2-container">
                    <div className="footer__contact">
                        <h3 className='footer__section2-title'>CONTÁCTANOS</h3>
                        <span>Laboratorios G&L Natural SAS</span>
                        <p>Cra. 50D #89-34</p>
                        <p>Medellín, Colombia</p>  
                    </div>              
                </div>
                <div className="footer__section2-container">
                    <div className="footer__info">
                        <h3 className='footer__section2-title'>INFORMACIÓN</h3>
                        <p>Acerca de nosotros</p>
                        <p>Política de privacidad</p>
                        <p>Términos y condiciones</p>
                    </div>                    
                </div>            
            </div>
        </div>        
    </div>
  )
}

export default Footer
