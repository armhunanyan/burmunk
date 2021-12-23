import {useState} from 'react';

import Answer from '../../components/Answer';

import './index.scss';

import questions from '../../data/questions';

function Game(props){

    const [currentQuestion, setCurrentQuestion] = useState(1);

    const [answered, setAnswered] = useState(false);

    const onAnswer = (i) => {

        props.addAnswer(i+1);

        setAnswered(true);

        if(currentQuestion < questions.length){

            setTimeout(function(){

                setAnswered(false);

                setCurrentQuestion(currentQuestion + 1);
    
            },1200);

        }else{
            setTimeout(function(){

                props.showFinal();
    
            },1200);
        }

    }

    return(
        <div className="game">
            
            <div className="logo"></div>

            <div className="wrapper">

                <div className="index">Հարց {currentQuestion}</div>

                <p className="question">{questions[currentQuestion-1].title}</p>

                {questions[currentQuestion-1].options.map((answer,i) => (
                    <Answer key={i} onAnswer={()=>onAnswer(i)} answered={answered} answer={answer}></Answer>
                ))}
            </div>

            <div className="gift"></div>

            <div className="gwd-motion-path-m47p-anim-x">
                <div className="gwd-motion-path-m47p-anim-y">
                    <div className="fly"></div>
                </div>
            </div>

        </div>
    )

}

export default Game;