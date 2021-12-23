/*global FB*/

import React, { useState,useEffect} from 'react';

import './index.scss'; 

import parfumes from '../../data/parfumes';

function GameOver(props){

  const [parfume,setParfume] = useState({});

  const [promocode,setPromocode] = useState('');

  const handleClick = () => {

    var quote = 'Իմ բույրն է «' + parfume.title + '»:';

    window.open('https://www.facebook.com/sharer/sharer.php?u=https://prodigi.am/apps/burmunk/game/index.php?result='+parfume.title + '&quote='+quote,'facebook-share-dialog',"width=1200, height=630");

  }

  const formParfume = () => {

    let index = props.answers[0].toString() + props.answers[2].toString() + props.answers[4].toString();

    const available_parfumes = parfumes[index];

    let random_index = Math.floor(Math.random() * available_parfumes.length);

    let parfume = available_parfumes[random_index];

    let code = 'B' + index + random_index;

    setParfume(parfume);

    setPromocode(code);
    
  }

  useEffect(() => {
    formParfume();
  });

  return(

    <div className="final">

      <p className="title"></p>

      <p className="title-2">{parfume.title}</p>

      <div className="line"></div>

      <p className="desc">{parfume.desc}</p>

      <div className="img">
        <img src={parfume.image}></img>
      </div>

      <p className="show">Ներկայացրու՛ «<span className="promo">{promocode}</span>» պրոմոկոդը Բուրմունքի ցանկացած սրահում, ստացիր <span className="num">10%</span> զեղչ օծանելիքը գնելու համար։ </p>

      <button type="button" className="share" onClick={handleClick}></button>

      <a href="#" className="start" onClick={props.playAgain}></a>

    </div>
);

}

export default GameOver;