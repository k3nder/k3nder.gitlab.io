import React, { type ChangeEvent, type ChangeEventHandler } from "react";
import {
  AcceptCookies,
  accepted,
  cookieKeys,
  getCookie,
  load,
  setCookie,
} from "../../cookies";
import { Language, languageToString } from "../../scripts.ts";
import "../../css/global.scss";
interface props {
  actual: Language;
}
const LanguageSelector: React.FC<props> = ({ actual }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    window.location.replace(`/` + event.target.value);
    if (load()) AcceptCookies();
    if (accepted) setCookie(cookieKeys.language, event.target.value);
  };

  return (
    <>
      <label className="dark:text-white" htmlFor="languages">
        Lenguage:{" "}
      </label>
      <select
        className="bg-transparent txt"
        name="languages"
        id="languages"
        onChange={handleChange}
        defaultValue={languageToString(actual)}
      >
        <option className="dark:bg-black txt" value="en">
          English
        </option>
        <option className="dark:bg-black txt" value="es">
          Spanish
        </option>
        <option className="dark:bg-black txt" value="fr">
          French
        </option>
      </select>
    </>
  );
};
export default LanguageSelector;
