import { parse } from "postcss";

export let accepted = false;
export const cookieKeys = {
  darkMode: "k3nder.enable.dark",
  cookiesAccept: "k3nder.accepted",
  language: "k3nder.lang",
};

export function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; path=/`;
  ////console.log({name, value})
}
export function load(): boolean {
  ////console.log(Boolean(getCookie(cookieKeys.cookiesAccept)));
  return parseStringToBoolean(
    getCookie(cookieKeys.cookiesAccept) == undefined
      ? "false"
      : getCookie(cookieKeys.cookiesAccept),
  );
}
export function AcceptCookies() {
  accepted = true;
}
export function getCookie(cname: string): string {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "undefined";
}
export function parseStringToBoolean(string: string) {
  const trimmedString = string.trim().toLowerCase();
  ////console.log("parse: " + string);
  if (trimmedString === "true") {
    return true;
  } else if (trimmedString === "false") {
    return false;
  }
  ////console.log(string);
  return false;
}
export function getBooleanCookie(key: string): boolean {
  return parseStringToBoolean(getCookie(key));
}
