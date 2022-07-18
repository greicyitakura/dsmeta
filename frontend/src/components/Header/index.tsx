import logo from "../../assets/img/logo.svg";
import "./styles.css";

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta da Greicy</h1>
        <p>
          Projeto desenvolvido na semana Spring React da DevSuperior
          <a href="https://www.instagram.com/devsuperior.ig">@devsuperior.ig</a>
          <a href="https://github.com/greicyitakura/dsmeta">Github do projeto</a>
          <a href="https://www.linkedin.com/in/greicy-itakura">LinkedIn</a>
        </p>
      </div>
    </header>
  );
}

export default Header;
