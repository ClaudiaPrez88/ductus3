import React from 'react';
import { useEffect } from "react";

const Red = () => {
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
          subject: "Monitoreo de CCTV:",
          desc: "1. Controlar y Verificar en tiempo real los hechos que ocurren al interior o exterior de una instalación a resguardar.",
          desc2: "2. Se cuenta con personal especializado en materias de CCTV.",
          desc3: "3. Mantener un registro y base de datos, para la toma de decisiones, permitiendo realizar informes diarios o mensuales de las actividades que se realizan.",
          desc4: "4. Reduce las áreas de cobertura de seguridad, reduciendo los gastos de vigilancia."
        },
        {
            id: 2,
            subject: "Monitoreo de Control Alarmas:",
            desc: "1. Realizar en formar oportuna la activación de manera manual o automática, ante la transgresión de una zona o sector a resguardar.",
            desc2: "2. Informar de manera oportuna de los hechos ocurridos ante la transgresión de las medidas de seguridad previamente establecidas en una zona.",
            desc3: "3. Informar a la Entidades Jurídicas de los hechos ocurridos, para la pronta solución de los hechos ocurridos.",
            desc4: "4. Hacer uso de los todos los equipos logísticos para disuadir a los antisociales ante la comisión de un delito."
          }
        
      ];
    
  return (
    <div>
        <div className="iknow_tm_resume">
      <div className="iknow_tm_main_title">
        <span>Red Interna</span>
        <h3>Telecomunicaciones</h3>
      </div>
      <div className="resume_inner">
        <div className="left">
        {educations.map((education) => (
          <div className="info_list">
             <h4>{education.subject}</h4>
            <ul>
             
                <li key={education.id}>
                  <div className="list_inner">
                    <div className="text">
                      <p>{education.desc}</p>
                      <p>{education.desc2}</p>
                      <p>{education.desc3}</p>
                      <p>{education.desc4}</p>
                    </div>
                  </div>
                </li>
              
            </ul>
          </div>
          ))}
        </div>
        <div className="right">
        <img
                          className="sistema-img"
                          src="/img/sistema.png"
                          alt="Sistema"
                        />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Red