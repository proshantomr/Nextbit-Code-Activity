import NavBar from "./Components/NavBar.jsx";
import {useEffect, useState} from "react";
import SideBar from "./Components/SideBar.jsx";

const Nav = [
    'Home', 'AboutUs', 'Projects', 'Report','blog'
];
// console.log(Nav);

const  sidebar = [
 'Getting Started', 'Dashboard','Pages', 'Misc'

];

// console.log(sidebar);



function App() {
  const [navbar, setNavbar] = useState([]);

  useEffect(() => {setNavbar(Nav)}, [])
    // console.log(navbar);

    const [sideBar, setSidebar] = useState([]);

    useEffect(() => {
        setSidebar(sidebar)
    }, []);




  return (
     <div>
         <NavBar navbar={navbar}></NavBar>
         <SideBar aside={sideBar}/>

     </div>
  )
}

export default App
