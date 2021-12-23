import {useState} from 'react';

import './index.scss';

function PreGame(props){

    const [clicked, setClicked] = useState(false);

    const handleClick = ()=>{

        let spray = document.getElementById('spray-audio');

        if(spray){
            
            spray.currentTime = 0;

            spray.play();
        }

        setClicked(true);

    }

    return(
        <div className={(!clicked) ? 'pregame' : 'pregame animate'}>

            <div className="left"></div>

            <div className="arrow"></div>

            <div className="gift"></div>

            <div className="pchik"></div>

            <div className="toz"></div>

            <div className="heart heart-1"></div>

            <div className="heart heart-2"></div>

            <div className="heart heart-3"></div>

            <div className="text">
                Արի՛ պարզենք, թե ո՞ր բույրն է ավելի ընդգծում անհատականությունդ։
                <br></br>
                Ցիտրուսայի՞ն, թարմ, միգուցե, ավելի զգացմունքային՝ արևելյան երանգներով...
                <br></br><br></br>
                Պատասխանի՛ր քեզ բնութագրող մի քանի հարցի, բացահայտի՛ր կատարյալ բույրն ու գնի՛ր այն Burmunk սրահներից` ստանալով անհատական զեղչի քո պրոմո կոդը։
            </div>

            <div className="press" onClick={handleClick}>Սեղմիր</div>

            <div className="click-part" onClick={handleClick}></div>

            <button className="start" onClick={props.startGame}></button>

        </div>
    )

}

export default PreGame;