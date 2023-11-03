// className="background_shape"

const Jessica = ({
  menus,
  setActiveNav,
  activeNav,
  shapes1,
  setCopyRightClass,
}) => {
  return (
    <div className="iknow_tm_hero">
      <div />
      <div className="hero_content">
        <div className="container">
          <div className="content_inner">
            <div className="main_info">
              <div className="left">
                <span className="subtitle">I'm</span>
                <h3 className="name">Jessica Parker</h3>
                <p className="text">
                  A passionate UI/UX Designer and Web Developer based In NYC,
                  USA
                </p>
                {/* <div className="iknow_tm_video">
                  <div className="video_inner">
                    <div className="circle" />
                    <h3 className="play">Play Video</h3>
                    <a
                      className="iknow_tm_full_link popup-youtube"
                      href="https://www.youtube.com/watch?v=7e90gBu4pas"
                    />
                  </div>
                </div> */}
              </div>
              <div className="right">
                <div className="image">
                  <img src="/img/logo/logo.svg" alt="img" />
                  <div className="main" data-img-url="/img/logo/logo.svg" />
                </div>
              </div>
            </div>
            <div className="main_menu">
              <ul>
                {menus.map(
                  (menu) =>
                    menu.id !== 0 && (
                      <li
                      className={`iknow_tm_full_link ${activeNav === menu.href ? "active" : ""} 
                      ${menu.id === 1 ? "clase1" : menu.id === 4 ? "clase4" : menu.id === 5 ? "clase1" : menu.id === 6 ? "clase6" : ""}`}
                      key={menu.id}>
                        <img
                          className="svg"
                          src={`/img/svg/${menu.icon}.svg`}
                          alt="Svg"
                        />
                        <span>{menu.title}</span>
                        <a
                          className="iknow_tm_full_link"
                          href={`#${menu.href}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveNav(menu.href);
                            setCopyRightClass("hidden visible");
                          }}
                        />
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Shapes */}
      {/* <div className="simple_shapes">
        {shapes1.map((shap) => (
          <span
            key={shap.id}
            className={`${shap.classname} ${shap.animationName}`}
          >
            <img
              className="svg"
              src={`/img/svg/shapes/${shap.shapeImg}.svg`}
              alt="svg-icon"
            />
          </span>
        ))}
      </div> */}
      {/* /Hero Shapes */}
    </div>
  );
};
export default Jessica;
