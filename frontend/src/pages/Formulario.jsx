import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from "./Formulario.module.css"
import  Button  from '../components/Button';
import { useDispatch } from 'react-redux';
import {postClients} from "../redux/actions/clientsAction"
import { useNavigate, Link} from 'react-router-dom';


const Formulario = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

	const navigate = useNavigate()

	const dispatch = useDispatch()

	const publicar = (values) => {
		dispatch(postClients(values))
		cambiarFormularioEnviado(true);
		setTimeout(() => cambiarFormularioEnviado(false), 5000);
		document.getElementById("formulario").reset();
		// navigate(-1)
		
		
	}

	const validar = (values) => {
		const errores = {}
		// validacion nombre
		if(!values.nombre){
			errores.nombre = 'Por favor ingresa un nombre'
		} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)){
			errores.nombre = 'El nombre solo puede contener letras y espacios'
		}
		//validacion apellidos
		if(!values.apellidoP){
			errores.apellidoP = 'Por favor ingresa un apellido paterno'
		} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.apellidoP)){
			errores.apellidoP = 'El apellido solo puede contener letras y espacios'
		}

		if(!values.apellidoM){
			errores.apellidoM = 'Por favor ingresa un apellido paterno'
		} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.apellidoM)){
			errores.apellidoM = 'El apellido solo puede contener letras y espacios'
		}
		
		// Validacion telefono
		if(!values.telefono){
			errores.telefono = 'Por favor ingresa un telefono'
		}

		return errores;
	}


	return (
		<>
			<Formik
				initialValues={{
					nombre: '',
					apellidoP: '',
                    apellidoM:"",
					calle:"",
					numero:"",
					colonia:"",
					telefono:""
				}}
				
				onSubmit={publicar}
				validate={  validar }
			>
				{( {errors} ) => (
					<Form id='formulario'>
                        <div className="container-fluid bg-primary  ">
                            <div className={s.contenedor}>
						<div >
                            <div className="col ">
							    <label htmlFor="nombre">Nombre</label>
                            </div>
                            <div className="col">
							    <Field
								type="text" 
								id="nombre" 
								name="nombre" 
								placeholder="Tu Nombre..."
						    	/>
								
                            </div>
							<ErrorMessage name="nombre" component={() => (<div className={s.warning}>{errors.nombre}</div>)} />
						</div>
                        <div >
                            <div className="col">
							    <label htmlFor="telefono">Apellido Paterno</label>
                            </div>
                            <div className="col">
							    <Field
								type="text" 
								id="apellidoP" 
								name="apellidoP" 
								placeholder="Apellido Paterno..."
						    	/>
                            </div>
							<ErrorMessage name="apellidoP" component={() => (<div className={s.warning}>{errors.apellidoP}</div>)} />
						</div>
                        
						<div>
                            <div className="col">
							    <label htmlFor="correo">Apellido Materno</label>
                            </div>
                            <div className="col">
							    <Field
								type="text" 
								id="apellidoM" 
								name="apellidoM" 
								placeholder="apellido Materno.." 
						    	/>
                            </div>
							<ErrorMessage name="apellidoM" component={() => (<div className={s.warning}>{errors.apellidoM}</div>)} />
						</div>
						<div className='col'>
							<div className="col">
						<label htmlFor="correo">Calle</label>
							</div>
							<Field
							type="text"
							id="calle"
							name="calle" 
							placeholder="calle" />
						</div>

						<div className='col'>
							<div className="col">
						<label htmlFor="correo">Numero</label>
							</div>
							<Field
							type="number"
							id="numero"
							name="numero" 
							placeholder="Numero..." />
						</div>

						<div className='col'>
							<div className="col">
						<label htmlFor="correo">Colonia</label>
							</div>
							<Field
							type="text"
							id="colonia"
							name="colonia" 
							placeholder="colonia..." />
						</div>

						<div className='col'>
							<div className="col">
						<label htmlFor="correo">Telefono</label>
							</div>
							<Field
							type="number"
							id="telefono"
							name="telefono" 
							placeholder="telefono..." />
						</div>
						<ErrorMessage name="telefono" component={() => (<div className={s.warning}>{errors.telefono}</div>)} />
                        <div className="col pb-2">
						{/* <button className='btn btn-default btn-block btn-secondary  ' type="submit">Enviar</button> */}
                       <Button py-4 type="submit">Enviar</Button>
                        </div>
						{formularioEnviado && <p className="exito">Cliente creado con exito!</p>}
                        </div>
                     </div>
					 <Link to="/">
					<i class="bi bi-arrow-left-circle">Volver</i>
					</Link>
					</Form>
					
				)}


			
			</Formik>
		</>
	);
}
 
export default Formulario;