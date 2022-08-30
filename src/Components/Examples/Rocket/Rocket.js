import React, { useState, useEffect } from 'react';
import './Rocket.css'
import { Grid } from '@mui/material';
import SA from '../../Input/ShortAnswer/SA';
export const launchContext = React.createContext();

const Rocket = (props) => {

  const header = props.header;
  const question = props.question;
  const answer = props.answer;
  const placeholder = props.placeholder;
  const image = props.image;
  const alt = props.alt;
  const position = props.position;
  const zoom = props.zoom;
  const width = props.width;
  const pagetype = props.pagetype;
  const [launch, setLaunch] = useState(false);
  

  useEffect(() => {
    const launchBtn = document.querySelector('.launch__btn');
    const newRocket = document.querySelector('.newRocket__btn');
    const floatBtn = document.querySelector('.float__btn');
    const rocket = document.querySelector('.rocket_body');
    const fire = document.querySelector('.fire_body');
    const fireAnimation = document.querySelector('.fire_animation');
    var isFloating = false;

    function launchRocket() {
      rocket.classList.add('launched_animation');
      rocket.style.animationPlayState = 'running';
      /*launchBtn.innerHTML = '';
      launchBtn.innerHTML = 'FIUM!';*/
    fire.style.opacity = '1';
      fireAnimation.style.animationPlayState = 'running';
    }

    function floatRocket() {
      if (isFloating) {
        floatBtn.innerHTML = 'FLOAT';
        rocket.style.animationPlayState = 'paused';
        rocket.classList.remove('float_animation');
        fire.style.opacity = '0';
        isFloating = false;
      } else {
        floatBtn.innerHTML = 'STOP';
        rocket.classList.add('float_animation');
        fire.style.opacity = '1';
        rocket.style.animationPlayState = 'running';
        isFloating = true;
      }
    }

    function createRocket() {
      rocket.style.animationPlayState = 'paused';
      fire.style.animationPlayState = 'paused';
      rocket.classList.remove('float_animation');
      rocket.classList.remove('launched_animation');
      fire.classList.remove('fire_animation');
      launchBtn.innerHTML = 'LAUNCH';
      fire.style.opacity = '0';
      setTimeout(function(){
        fire.classList.add('fire_animation');
      }, 500);
    }

    if (launch === true) {
      launchRocket();
    }

  });

    return (
        <Grid container spacing={0}>
          <Grid item style={{ flexGrow: "1" }}>
            <div class="Rocket">
              <div className="rocket">
                  <div class="rocket_body">
                    <div class="body"></div>
                    <div class="window"></div>
                    <div class="window small"></div>
                    <div class="wing wing-left"></div>
                    <div class="wing wing-right"></div>
                    <div class="wing wing-center"></div>
                    <div class="fire_body fire_animation">
                      <div class="fire_red">
                        <div class="fire_yellow"></div>
                      </div>
                    </div>
                  </div>
                  <div class="base"></div>
              </div>
            </div>
          </Grid>
          <Grid>
          <launchContext.Provider value={[launch, setLaunch]} >
          <SA header={header} question={question} placeholder={placeholder} answer={answer} image={image} alt={alt} position={position} width={width} zoom={zoom} pagetype={pagetype} />
          </launchContext.Provider>
          </Grid>
          </Grid>
    );
}

export default Rocket;



