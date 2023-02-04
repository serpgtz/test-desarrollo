
import { Button } from "react-bootstrap";
import { useState } from "react";
import React from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import {getAllClients} from "../redux/actions/clientsAction"
import { Link } from "react-router-dom";


function Tabla() {

  


  const dispatch =  useDispatch()
  const clients = useSelector(state=>state.clientes)
 
  useEffect(()=>{
    dispatch(getAllClients())
  },[dispatch])
    
    return (
      <>
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            {/* <th>Calle</th>
            <th>Numero</th>
            <th>Colonia</th> */}
            <th>Telefono</th>
            <th><i class="bi bi-binoculars-fill"></i></th>

          </tr>
        </thead>
        <tbody>
          {
            clients?.map(c=>{
              return(
                <tr>
                  <td>{c._id}</td>
                  <td>{c.nombre}</td>
                  <td>{c.apellidoP}</td>
                  <td>{c.apellidoM}</td>
                  {/* <td>{c.calle}</td>
                  <td>{c.numero}</td>
                  <td>{c.colonia}</td> */}
                  <td>{c.telefono}</td>
                  
                  <td><Link to={"/detail/"+c._id}><Button><i class="bi bi-search"></i></Button></Link></td>
                </tr>
              )
            })
          }
          {/* <tr>  
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </Table>
      {/* <Modal 
      handleClose={handleClose}
      show={show}/> */}
      </>
      
    );
}

export default Tabla;