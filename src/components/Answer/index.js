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

// class Answer extends React.Component{
//     constructor(props){
//         super(props);

//         this.state = {
//             className:"",
//         }
//         this.click = this.click.bind(this);
//     }
//     componentWillReceiveProps(newProps){

//         if(!newProps.answered){
//             this.setState({className:''});
//         }
//     }
//     click(){

//         if(!this.props.answered){

//             this.setState({className:"active"});

//             this.props.onAnswer();
//         }
        
//     }
//     render(){
//         var new_classname = this.state.className;
//         return(
//             <div className="answer" onClick={this.click}><span className={new_classname}></span>{this.props.answer}</div>
//         )
//     }
// }

export default Answer;