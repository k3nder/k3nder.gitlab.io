import React, { useState } from "react";
import { AcceptCookies, accepted, cookieKeys, getBooleanCookie, getCookie, load, parseStringToBoolean, setCookie } from "../../cookies";
const SUN_LIGHT = "/theme-switch/sun-light.svg", HALF_MOON = "/theme-switch/half-moon.svg";
const switchTheme = () => {

    const [icon, setIcon] = React.useState(HALF_MOON);
    const [dark, setDark] = React.useState(true);
    
    React.useEffect(() => {
        if(load()) AcceptCookies();
        if(getCookie(cookieKeys.darkMode) == "undefined") setDark(/*window.matchMedia("(prefers-color-scheme: dark)").matches*/ dark);
        if(accepted) setDark(getBooleanCookie(cookieKeys.darkMode));
        if(dark && !document.body.classList.contains("dark")){
            document.body.classList.add("dark")
        } else if(!dark && document.body.classList.contains("dark")){
            document.body.classList.remove("dark")
        }
        setIcon(dark ? SUN_LIGHT : HALF_MOON);
        
      }, [dark]); 
    function handleSwitchTheme() {
        
        if(accepted) setCookie(cookieKeys.darkMode, String(!dark));
        setDark(!dark)
    }
    return (
        <>
            <button onClick={handleSwitchTheme}><img src={icon} alt="rrrrrr" /></button>
        </>
    );
}
export default switchTheme;
