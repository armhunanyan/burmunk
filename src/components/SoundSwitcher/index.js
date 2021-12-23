import './index.scss';

export default function(props){

    let c = 'switcher';

    if(props.muted){

        c += ' off'; 

    }

    return(
        <div className={c} onClick={props.mute}></div>
    ) 
}