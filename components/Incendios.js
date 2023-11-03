import React from 'react';
import { useEffect } from "react";

const Incendios = () => {
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
          subject: "Sistema de incendios ",
          desc: "Esta diseñado para detectar la presencia no deseada de fuego, humo y otros elementos derivados de eje mediante la supervisión de los cambios ambientales asociados con la contribución.",
          desc2: "Regular los estándares técnicos en su diseño e instalación de cada uno de los equipos logísticos de telecomunicaciones en la prestación de los servicios que serán destinado a satisfacer cada uno de los proyectos de edificación inmobiliaria.",
        },
        {
            id: 2,
            subject: "Informes favorables:",
            desc: "Es el documento técnico que permite verificar que se den cumplimiento a las especificaciones técnicas establecidas en la normativa legal, de acuerdo a lo dictado por la Subtel."
          }
        
      ];
    
  return (
    <div>
        <div className="iknow_tm_resume">
      {/* <div className="iknow_tm_main_title">
        <span>Alarmas:</span>
        <h3>Alarmas:</h3>
      </div> */}
      <div className="resume_inner">
        <div className="left">
        {educations.map((education) => (
          <div className="info_list">
            <div className="iknow_tm_resume_title">
              <h3>{education.subject}</h3>
              <span className="shape" />
            </div>
            <ul>
             
                <li key={education.id}>
                  <div className="list_inner">
                    <div className="text">
                      <p>{education.desc}</p>
                      <p>{education.desc2}</p>
                    </div>
                  </div>
                </li>
              
            </ul>
          </div>
          ))}
        </div>
        <div className="right">
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Incendios
