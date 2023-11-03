import React from 'react';
import { useEffect } from "react";

const Citofonia = () => {
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
          subject: "Citofonía",
          university: "University of Maine",
          desc: "Es comunicación entre un propietario, copropietario o residente y una recepción o administración y viceversa. Con el fin de transmitir un mensaje para satisfacer las diferentes necesidades que se presentan dentro de una comunidad, residencia u oficinas.",
          date: "2018 - 2020",
        },
        
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
          <div className="info_list">
            <div className="iknow_tm_resume_title">
              <h3>Citofonía:</h3>
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
          
        </div>
        <div className="right">
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Citofonia


