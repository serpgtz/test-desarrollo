import React, {useEffect} from "react";
import { Container, ListGroup } from "react-bootstrap";
import s from "./Detail.module.css"
import {getClientsById} from "../redux/actions/clientsAction"
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Listgroup from "../components/Listgroup";
import Tabla2 from "../components/Tabla2";
import Opciones from "../components/Opciones/Opciones";



function Detail() {

    const dispatch = useDispatch()
    const { id } = useParams();
    const cliente = useSelector(state=>state.cliente)
   

    useEffect(()=>{
        dispatch(getClientsById(id))
        console.log(id)
        
    },[dispatch])


    return (
       <Container  fluid className={s.container}>
        <Tabla2
        id={cliente._id}
        nombre={cliente.nombre}
        apellidoM={cliente.apellidoM}
        apellidoP={cliente.apellidoP}
        calle={cliente.calle}
        numero={cliente.numero}
        colonia={cliente.colonia}
        telefono={cliente.telefono}
        />
       <Link to="/">
			<i class="bi bi-arrow-left-circle">Volver</i>
		</Link>
       </Container>
    );
}

export default Detail;