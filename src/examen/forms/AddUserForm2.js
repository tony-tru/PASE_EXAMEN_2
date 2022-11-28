import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import {db} from '../firebaseconfig/fireBase'

const AddUserForm2 = () => {
	const [nomreavil, setNomreavil]= useState('')
	const [supvil, setSupvil]= useState('')
	const [edavil, setEdavil]= useState(0)
	const [afivil, setAfivil]= useState('')
	const [desvil, setDesvil]= useState('')
	const navigate = useNavigate()
	const heroesCollection = collection(db,"villain")
	const store = async (e) => {
		e.preventDefault()
		await addDoc(heroesCollection,{nomreavil:nomreavil, supvil:supvil,edavil:edavil, afivil:afivil,desvil:desvil,} )
		navigate('/App2')
	}

	return (
		<form  onSubmit={store}>
			<label>Nombre Real</label>
			<input type="text" value={nomreavil} onChange={(e) =>setNomreavil(e.target.value)} required/>
			<label>Nombre De Villano</label>
			<input type="text" value={supvil} onChange={(e) =>setSupvil(e.target.value)} required/>
			<label>Edad</label>
			<input type="text" name="edad" value={edavil} onChange={(e) =>setEdavil(e.target.value)} required/>
			<label>Afilación</label>
			<select name="afi"value={afivil} onChange={(e) =>setAfivil(e.target.value)} required >	
			<option value='Marvel'>Marvel</option>
			<option value='DC Comics'>DC Comics</option>
			</select>
			<label>Descripción</label>
			<p><textarea name="des" value={desvil} onChange={(e) =>setDesvil(e.target.value)} required></textarea></p>
			{/* <button>AGREGAR VILLANO</button> */}
			<button type='submit' className="btn btn-dark">AGREGAR VILLANO</button>
		</form>
	)
}

export default AddUserForm2