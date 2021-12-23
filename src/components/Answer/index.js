import React, {useState,useEffect} from 'react';

function Answer(props){

    const [className,setClassName] = useState("");

    const handleClick = () => {

        if(!props.answered){

            setClassName('active');

            props.onAnswer();
        }
    }

    useEffect( () => {
        if(!props.answered){
            setClassName('');
        }
    }, [props.answered])

    return(
        <div className="answer" onClick={handleClick}><span className={className}></span>{props.answer}</div>
    )
}

export default Answer;