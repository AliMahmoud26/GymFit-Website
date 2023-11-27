import Github from '../assets/github.png';
import Instagram from '../assets/instagram.png';
import Linkedin from '../assets/linkedin.png';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer>
      <hr />

      <div className="images-holder">
        <div className="social-links">
          <img src={Github} alt="Footer Image" />
          <img src={Instagram} alt="Footer Image" />
          <img src={Linkedin} alt="Footer Image" />
        </div>

        <div className="logo">
          <img src={Logo} alt="Logo Image" />
        </div>
      </div>

      {/* Blur Div */}
      <div className="blur footer-blur-1"></div>
      <div className="blur footer-blur-2"></div>

    </footer>
  )
}

export default Footer