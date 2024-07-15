import React, { type ChangeEvent, type ChangeEventHandler } from "react";
import {
  AcceptCookies,
  accepted,
  cookieKeys,
  getCookie,
  load,
  setCookie,
} from "../../cookies";
import { language } from "../../scripts.ts";
import "../../css/global.scss";
interface props {
  actual: language;
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
      >
        <option
          className="dark:bg-black txt"
          selected={actual == language.en}
          value="en"
        >
          English
        </option>
        <option
          className="dark:bg-black txt"
          selected={actual == language.es}
          value="es"
        >
          Spanish
        </option>
        <option
          className="dark:bg-black txt"
          selected={actual == language.fr}
          value="fr"
        >
          French
        </option>
      </select>
    </>
  );
};
export default LanguageSelector;
