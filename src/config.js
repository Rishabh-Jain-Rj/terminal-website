import Home from "./pages/Home"
import ListOfCommands from "./components/ListOfCommands"
import About from "./pages/About"
import Contact from "./pages/Contact"
let user="coolprogrammingprojects"

const components = {
    "home": Home,
    "help":ListOfCommands,
    "about":About,
    "contact":Contact
}

export {user,components}