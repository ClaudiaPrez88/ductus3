import SocialIcons from "./SocialIcons";

const TopBar = ({ topbarIcon = true, darkLogo = true }) => {
  return (
    <div className="iknow_tm_topbar" data-position="absolute">
      <div className="container">
        <div className="topbar_inner">
          <div className="logo">
            <a href="#">
              {darkLogo ? (
                <img src="/img/logo/logo.svg" alt="logo" className="logo-top" />
              ) : (
                <img src="/img/logo/logo.svg" alt="logo" className="logo-top"/>
              )}
            </a>
          </div>
          <div className="right">
            {topbarIcon && <SocialIcons />}
            <div className="iknow_tm_button">
              <a href="img/cv/1.jpg" download>
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
