import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar";

function Layout(){

    return (
        <div>
            <NavBar/>
            <Outlet/>
            <footer>Pie de pagina</footer>
        </div>
    )
}

export default Layout;