import React from "react";
import Home from "./components/Home";
import {Route, Routes} from "react-router-dom"
import Detail from "./pages/Detail.jsx";
import FormUpdate from "./pages/FormUpdate";
import Formulario from "./pages/Formulario";



function App() {
  return (
    <div>
      <Routes>
        <Route exact path={"/"} element={<Home/>}/>
        <Route exact path ={"/detail/:id"} element ={<Detail/>}/>
        <Route exact path ={"addCliente"} element ={<Formulario/>}/>
        <Route exact path ={"/actualizar/:id"} element ={<FormUpdate/>}/>
      </Routes>
    </div>
  )
    

  
   }

export default App;
