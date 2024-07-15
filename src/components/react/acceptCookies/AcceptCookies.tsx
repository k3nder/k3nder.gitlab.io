import React from "react";
import { accepted, load, setCookie, AcceptCookies, cookieKeys } from "../../../cookies";
import "./styles.css"
import "../../../css/global.scss"
interface props {
    texts: string[]
}
const AcceptCookiesC: React.FC<props> = ({texts}) => {
    const [hide, setHide] = React.useState(false);
    const [accepted, setAccepted] = React.useState(false);
    React.useEffect(() => {
        setAccepted(load())
        if(accepted){
            setHide(true);
            AcceptCookies();
            setCookie(cookieKeys.cookiesAccept, 'true');
        }
    }, [accepted]);
    function handleAccept(){
        setAccepted(true);
        setHide(true);
    }
    function handleCancel(){
        setHide(true);
    }
    return (
        <span className={`card txt ${hide ? "hidden" : ""}`}>
            <div className="card-description">
                {texts[0]}
            </div>
            <ul className="card-buttons-group list-group list-group-horizontal bg-transparent">
                <li className="card-buttons-group-item list-group-item border-0"><button className="btn btn-primary" onClick={handleAccept}>{texts[1]}</button></li>
                <li className="card-buttons-group-item list-group-item border-0"><button className="btn btn-secondary" onClick={handleCancel}>{texts[2]}</button></li>
            </ul>
        </span>
    );
}
export default AcceptCookiesC;