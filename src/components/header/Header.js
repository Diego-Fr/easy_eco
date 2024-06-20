import './Header.css'

const Header = _ =>{
    return (
        <>
        
        <div id="govsp-topbarGlobal" className="blu-e">
            <div id="topbarGlobal">
                <div id="topbarLink" className="govsp-black">
                <div className="govsp-portal">
                    <a
                    href="https://www.saopaulo.sp.gov.br"
                    title="nova guia Site Governo do Estado de São Paulo"
                    target="_blank"
                    >
                    <img
                        src="https://saopaulo.sp.gov.br/barra-govsp/img/logo-governo-do-estado-sp.png"
                        alt="logomarca Governo de São Paulo"
                        height={38}
                        className="logo"
                    />
                    </a>
                </div>
                </div>
                <nav className="govsp-navbar govsp-navbar-expand-lg">
                <a className="govsp-social" href="http://bit.ly/govspnozap">
                    <img
                    className="govsp-icon-social"
                    src="https://saopaulo.sp.gov.br/barra-govsp/img/i-whatsapp.png"
                    alt="Whatsapp Governo do Estado de SP"
                    />
                </a>
                <a className="govsp-social" href="https://www.flickr.com/governosp/">
                    <img
                    className="govsp-icon-social"
                    src="https://saopaulo.sp.gov.br/barra-govsp/img/i-flickr.png"
                    alt="Flickr Governo do Estado de SP"
                    />
                </a>
                <a
                    className="govsp-social"
                    href="https://www.linkedin.com/company/governosp/"
                >
                    <img
                    className="govsp-icon-social"
                    src="https://saopaulo.sp.gov.br/barra-govsp/img/i-linkedin.png"
                    alt="Linkedin Governo do Estado de SP"
                    />
                </a>
                <a className="govsp-social" href="https://www.tiktok.com/@governosp">
                    <img
                    className="govsp-icon-social"
                    src="https://saopaulo.sp.gov.br/barra-govsp/img/i-tiktok.png"
                    alt="TikTok Governo do Estado de SP"
                    />
                </a>
                <a className="govsp-social" href="https://www.youtube.com/governosp/">
                    <img
                    className="govsp-icon-social"
                    src="https://saopaulo.sp.gov.br/barra-govsp/img/i-youtube.png"
                    alt="Youtube Governo do Estado de SP"
                    />
                </a>
                <a className="govsp-social" href="https://www.twitter.com/governosp/">
                    <img
                    className="govsp-icon-social"
                    src="https://saopaulo.sp.gov.br/barra-govsp/img/i-twitter.png"
                    alt="Twitter Governo do Estado de SP"
                    />
                </a>
                <a className="govsp-social" href="https://www.instagram.com/governosp/">
                    <img
                    className="govsp-icon-social"
                    src="https://saopaulo.sp.gov.br/barra-govsp/img/i-insta.png"
                    alt="Instagram Governo do Estado de SP"
                    />
                </a>
                <a className="govsp-social" href="https://www.facebook.com/governosp/">
                    <img
                    className="govsp-icon-social"
                    src="https://saopaulo.sp.gov.br/barra-govsp/img/i-facebook.png"
                    alt="Facebook Governo do Estado de SP"
                    />
                </a>
                <p className="govsp-social">/governosp</p>
                <a
                    className="govsp-acessibilidade"
                    title="nova guia"
                    href="https://www.saopaulo.sp.gov.br/fale-conosco/comunicar-erros/"
                    target="_blank"
                >
                    <img
                    className="govsp-acessibilidade"
                    src="https://saopaulo.sp.gov.br/barra-govsp/img/i-error-report.png"
                    alt="Comunicar um erro"
                    />
                </a>
                </nav>
            </div>
            <button className="govsp-kebab" id="govsp-kebab" aria-expanded="false">
                <img
                src="https://saopaulo.sp.gov.br/barra-govsp/img/dots-menu.png"
                alt="Menu"
                />
            </button>
            <ul className="govsp-dropdown vs3" id="govsp-dropdown" aria-hidden="true">
                <li>
                <a className="govsp-social" role="button" href="http://bit.ly/govspnozap">
                    <img
                    className="govsp-icon-social"
                    src="https://saopaulo.sp.gov.br/barra-govsp/img/i-whatsapp.png"
                    alt="Whatsapp Governo do Estado de SP"
                    />
                </a>
                </li>
                <li>
                <a
                    className="govsp-social"
                    role="button"
                    href="https://www.flickr.com/governosp/"
                >
                    <img
                    className="govsp-icon-social"
                    src="https://saopaulo.sp.gov.br/barra-govsp/img/i-flickr.png"
                    alt="Flickr Governo do Estado de SP"
                    />
                </a>
                </li>
                <li>
                <a
                    className="govsp-social"
                    role="button"
                    href="https://www.linkedin.com/company/governosp/"
                >
                    <img
                    className="govsp-icon-social"
                    src="https://saopaulo.sp.gov.br/barra-govsp/img/i-linkedin.png"
                    alt="Linkedin Governo do Estado de SP"
                    />
                </a>
                </li>
                <li>
                <a
                    className="govsp-social"
                    role="button"
                    href="https://www.tiktok.com/@governosp"
                >
                    <img
                    className="govsp-icon-social"
                    src="https://saopaulo.sp.gov.br/barra-govsp/img/i-tiktok.png"
                    alt="TikTok Governo do Estado de SP"
                    />
                </a>
                </li>
                <li>
                <a
                    className="govsp-social"
                    role="button"
                    href="https://www.twitter.com/governosp/"
                >
                    <img
                    className="govsp-icon-social"
                    src="https://saopaulo.sp.gov.br/barra-govsp/img/i-twitter.png"
                    alt="Twitter Governo do Estado de SP"
                    />
                </a>
                </li>
                <li>
                <a
                    className="govsp-social"
                    role="button"
                    href="https://www.youtube.com/governosp/"
                >
                    <img
                    className="govsp-icon-social"
                    src="https://saopaulo.sp.gov.br/barra-govsp/img/i-youtube.png"
                    alt="Youtube Governo do Estado de SP"
                    />
                </a>
                </li>
                <li>
                <a
                    className="govsp-social"
                    role="button"
                    href="https://www.instagram.com/governosp/"
                >
                    <img
                    className="govsp-icon-social"
                    src="https://saopaulo.sp.gov.br/barra-govsp/img/i-insta.png"
                    alt="Instagram Governo do Estado de SP"
                    />
                </a>
                </li>
                <li>
                <a
                    className="govsp-social"
                    role="button"
                    href="https://www.facebook.com/governosp/"
                >
                    <img
                    className="govsp-icon-social"
                    src="https://saopaulo.sp.gov.br/barra-govsp/img/i-facebook.png"
                    alt="Facebook Governo do Estado de SP"
                    />
                </a>
                </li>
                <li>
                <p className="govsp-social">/governosp</p>
                </li>
            </ul>
            </div>

            
        </>
    )
}

export default Header