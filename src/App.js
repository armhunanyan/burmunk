import React, { useState } from 'react';

import './App.scss';

import Intro from "./pages/Intro";
import PreGame from './pages/PreGame';
import Game from './pages/Game';
import Final from './pages/Final';

import SoundSwitcher from './components/SoundSwitcher';

import bg_audio from './assets/audio/bg.mp3';
import spray_audio from './assets/audio/spray.wav';
import click_audio from './assets/audio/click.wav';

function App(props){

  const [screen,setScreen] = useState('intro');

  const [muted,setMuted] = useState(false);

  const [answers,setAnswers] = useState([]);

  const showPreGame =() => {
    setScreen('pregame');
  }
  const startGame =() => {
    setScreen('game');
  }
  const showFinal =() => {
    setScreen('final');
  }
  const playAgain =() => {
    setAnswers([]);
    setScreen('game');
  }
  const addAnswer = (anwer) =>{
    setAnswers(answers => [...answers, anwer]);
  }
  const handleContainerClick = () =>{

    const click_audio = document.getElementById('click-audio');

    const bg_audio = document.getElementById('bg-audio');

    if(click_audio){

      click_audio.currentTime = 0;

      click_audio.play();
    }

    if(bg_audio && bg_audio.paused){
      bg_audio.play();
    }

  }

  const renderScreen = (screen) => {

    switch(screen){

      case 'intro':

        return <Intro showPreGame={showPreGame}></Intro>;

      case 'pregame':

        return <PreGame startGame={startGame}></PreGame>;

      case 'game':

        return <Game showFinal={showFinal} addAnswer={addAnswer}></Game>;
      
      case 'final':

        return <Final playAgain={playAgain} answers={answers}></Final>;

      default:

        return <></>;

    }

  }

  return(
    <div className="app" onClick={handleContainerClick}>
   
      {renderScreen(screen)}

      <audio id="spray-audio" src={spray_audio} muted={muted}/>

      <audio id="bg-audio" src={bg_audio} muted={muted} autoPlay/>

      <audio id="click-audio" src={click_audio} muted={muted}/>

      <SoundSwitcher mute={()=>setMuted(!muted)} muted={muted}></SoundSwitcher>

    </div>
  );

}

export default App;