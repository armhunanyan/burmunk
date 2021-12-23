import './index.scss';

function Intro(props){

    return(

        <div className="intro">

            <div className="heart heart-1"></div>

            <div className="heart heart-2"></div>

            <div className="heart heart-3"></div>

            <div className="girl"></div>

            <div className="logo"></div>

            <div className="aroma"></div>

            <div className="text1"></div>

            <div className="text2"></div>

            <a className="start" href="#" onClick={props.showPreGame}></a>

        </div>
    )

}

export default Intro;