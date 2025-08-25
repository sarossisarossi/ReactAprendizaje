import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Homepage from "./Homepage";
import dessertsData from "./data/DessertsData"
import DessertsList from "./DessertsList";
import Cards from "./pages/cards"
import AppCalculator from "./pages/AppCalculator"
import FormContact from "./pages/form";
import { Routes, Route, Link } from "react-router-dom";
import YoutubeVideo from "./YoutubeVideo";
import Feedback from "./pages/Feedback";
import NewUser from "./pages/NewUser";
import Blog from "./pages/blog";
import Hws from "./pages/HelloWorldStates"
import { useEffect } from "react"; 
import FetchPage from "./pages/FetchPage";
import Randomuser from "./pages/Randomuser";
import Cashaccount from "./pages/Cashaccount";
import UserefPage from "./pages/UseRefPage";
import LiveOrders from "./pages/LiveOrders";
import SelectRadio from "./pages/SelectRadio";
import MousePosition from "./pages/MousePosition";
import ScrollTracker from "./pages/ScrollTracker";
function App() {
  // useEffect tiene el callback que es la funcion con el efecto que se quiere ejecturar
  //y puede devolver otra funcion para limpiar el efecto
  // el segundo argumento es un array que indica cuando se debe ejecturar y compara las dependencias para ver si lo corre denuev
  //useEffect(callback, dependencias?)
  //useefect
  useEffect(() => { 
   document.title = 'Little Lemon';
   }); 
  return (
    <div> 
      <Navbar />
      {/* <Sidebar /> */}
      <Routes> 
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/desserts" element={< DessertsList data={dessertsData}  />}></Route>
        <Route path="/contact" element={<FormContact />}></Route>
        <Route path="/youtube" element={<YoutubeVideo />}></Route>
        <Route path="/cards" element={<Cards />}></Route>
        <Route path="/calculator" element={<AppCalculator />}></Route>
        <Route path="/feedback" element={<Feedback />}></Route>
        <Route path="/newuser" element={<NewUser />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/hws" element={<Hws />}></Route>
        <Route path="/fetchpage" element={<FetchPage />}></Route>
        <Route path="/randomuser" element={<Randomuser />}></Route>
        <Route path="/cashaccount" element={<Cashaccount />}></Route>
        <Route path="/userefpage" element={<UserefPage />}></Route>
        <Route path="/liveorders" element={<LiveOrders />}></Route>
        <Route path="/selectradio" element={<SelectRadio />}></Route>
        <Route path="/mouseposition" element={<MousePosition />}></Route>
        <Route path="/scrolltracker" element={<ScrollTracker />}></Route>
      </Routes>
    </div>
  );
};

export default App;
