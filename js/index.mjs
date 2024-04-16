import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import * as post from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";


const path = location.pathname;

if (path === "/" || path === "/index.html") {
    setLoginFormListener();
    console.log("did this work?");
} else if (path === "/register/index.html") {
    setRegisterFormListener();
} else if (path === "/feed/index.html") {
    runPosts();
    renderPostTemplate();
    

}





