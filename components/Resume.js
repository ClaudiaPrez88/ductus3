import { useEffect } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const Resume = () => {
  useEffect(() => {
    document.querySelectorAll(".progress_inner").forEach(function (progress) {
      var pValue = parseInt(progress.dataset.value, 10);
      var pColor = progress.dataset.color;
      var pBarWrap = progress.querySelector(".bar");
      var pBar = progress.querySelector(".bar_in");
      var number = progress.querySelector(".number");
      var label = progress.querySelector(".label");

      number.style.right = 100 - pValue + "%";

      setTimeout(function () {
        label.classList.add("dark");
      }, 500);

      pBar.style.width = pValue + "%";
      pBar.style.backgroundColor = pColor;

      setTimeout(function () {
        pBarWrap.classList.add("open");
      });
    });
  }, []);

  const educations = [
    {
      id: 1,
      subject: "Alarmas",
      university: "University of Maine",
      desc: "Es el conjunto de equipos y dispositivos electrónicos interconectados entre si a través de una central alarmas cuya aplicación están relacionadas con la protección de personas y bienes.",
      date: "2018 - 2020",
    },
    
  ];

  const experiences = [
    {
      id: 1,
      designation: "Protección anti-intrusión",
      company: "1.",
      desc: "Ingreso a una zona no autorizada.",
      company2: "2.",
      desc2: "Evitar y alertar, cuando se ha transgredido la zona restringida o exclusiva.",
    },
    {
      id: 2,
      designation: "Protección antirobo",
      company: "1.",
      desc: "Evitar la comisión de un delito ante un bien o contra una persona."
    },
    {
      id: 3,
      designation: "Control de acceso:",
      company: "1.",
      desc: "Colocar o asignar niveles de acceso al personal para ingresar a sectores o zonas, mediante una clasificación de perfil y permisos predeterminada.",
      company2: "2.",
      desc2: "Implementación de equipos logísticos de seguridad con el fin de controlar el acceso a ciertas zonas o sectores de un determinado espacio físico.",
    },
  ];

  const personalSkills = [
    { id: 1, title: "Time Management", value: "90" },
    { id: 2, title: "Effeciency", value: "70" },
    { id: 3, title: "Intigrity", value: "80" },
  ];

  const softwareSkills = [
    { id: 1, title: "Ms Office", value: "80" },
    { id: 2, title: "Photoshop", value: "75" },
    { id: 3, title: "Illustrator", value: "90" },
    { id: 4, title: "Figma", value: "65" },
  ];

  return (
    <div className="iknow_tm_resume">
      {/* <div className="iknow_tm_main_title">
        <span>Alarmas:</span>
        <h3>Alarmas:</h3>
      </div> */}
      <div className="resume_inner">
        <div className="left">
          <div className="info_list">
            <div className="iknow_tm_resume_title">
              <h3>Alarmas</h3>
              <span className="shape" />
            </div>
            <ul>
              {educations.map((education) => (
                <li key={education.id}>
                  <div className="list_inner">
                    <div className="short">
                    </div>
                    <div className="text">
                      <p>{education.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="info_list">
            <div className="iknow_tm_resume_title">
              <h3>Protección anti-intrusión</h3>
              <span className="shape" />
            </div>
            <ul>
              {experiences.map((experience) => (
               <>
                <li key={experience.id}>
                  <div className="list_inner">
                    <div className="short">
                      <div className="job">
                        <h3 className="tit-list">{experience.designation}</h3>
                       
                        <p className="text"><span>{experience.company} </span>{experience.desc}</p>
                      </div>
                    </div>
                  </div>
                </li>
                 <li key={experience.id}>
                 <div className="list_inner">
                   <div className="short">
                     <div className="job">
                      
                       <p className="text"> <span>{experience.company2} </span>{experience.desc2}</p>
                     </div>
                   </div>
                 </div>
               </li>
               </>
                
              ))}
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="skills_list">
            <div className="iknow_tm_resume_title">
              <h3>Personal Skills</h3>
              <span className="shape" />
            </div>
            <div className="personal">
              <div className="dodo_progress">
                {personalSkills.map((skill) => (
                  <div
                    className="progress_inner"
                    data-value={skill.value}
                    key={skill.id}
                  >
                    <span>
                      <span className="label">{skill.title}</span>
                      <span className="number">{skill.value}%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="skills_list">
            <div className="iknow_tm_resume_title">
              <h3>Software Skills</h3>
              <span className="shape" />
            </div>
            <div className="software">
              <div className="circular_progress_bar">
                <ul>
                  {softwareSkills.map((skill) => (
                    <li key={skill.id}>
                      <div className="list_inner">
                        <div className="myCircle" data-value="0.95">
                          <CircularProgressbar
                            value={skill.value}
                            strokeWidth={4}
                            styles={buildStyles({
                              // Colors
                              pathColor: "#ff451b",
                            })}
                          />
                          <h3 className="number">{skill.value}%</h3>
                        </div>
                        <div className="title">
                          <h3>{skill.title}</h3>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
