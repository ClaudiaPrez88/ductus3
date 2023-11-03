import { context } from "@/context/context";
import { useContext } from "react";

const AboutMe = () => {
  const { aboutData } = useContext(context);
  return (
    <div className="iknow_tm_about">
      
      <div>
        <div className="iknow_tm_main_title">
        
          <h3>{aboutData.title}</h3>
        </div>
        <div className="text">
          <p>{aboutData.bio}</p>
        </div>
        <img src="img/alarma.png" alt="image" className="img-alarma" />
      </div>
    </div>
  );
};
export default AboutMe;
