import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";


const path = location.pathname;

if (path === "/" || path === "/index.html") {
    setLoginFormListener();
    console.log("did this work?");
} else if (path === "/register/index.html") {
    setRegisterFormListener();
}