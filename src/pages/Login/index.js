import './style.css';

export default function Login() {
  return (
    <div className="containerLogin">
      <form className="formsLogin">
        <div className="container_formsLogin">
          <h1 className="tituloLogin">LOGIN</h1>
          <input
            className="inputLogin"
            type="text"
            placeholder="usuario@exemplo.com"
          />
          <input
            className="inputLogin"
            type="password"
            placeholder="digite sua senha"
          />
          <button className="botao_login">Login</button>
          <a
            className="cadastrar"
            href="https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13534421690&extra_1=s|c|547348930993|e|instagram%20%27|&placement=&creative=547348930993&keyword=instagram%20%27&partner_id=googlesem&extra_2=campaignid%3D13534421690%26adgroupid%3D126262409974%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1321618851291%26loc_physical_ms%3D1001773%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=EAIaIQobChMIk83Aza2U-gIVDz6RCh1bJAv0EAAYASAAEgI2OPD_BwE"
          >
            Cadastre-se
          </a>
        </div>
        <div  className='divDogLogin' />
      </form>
    </div>
  );
}