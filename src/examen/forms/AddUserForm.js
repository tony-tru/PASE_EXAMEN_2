import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import {db} from '../firebaseconfig/fireBase'

const AddUserForm = () => {
	const [nomreasup, setNomreasup]= useState('')
	const [supher, setSupher]= useState('')
	const [edaher, setEdaher]= useState(0)
	const [afiher, setAfiher]= useState('')
	const [desher, setDesher]= useState('')
	const navigate = useNavigate()
	const heroesCollection = collection(db,"heroes")
	const store = async (e) => {
		e.preventDefault()
		await addDoc(heroesCollection,{nomreasup:nomreasup, supher:supher,edaher:edaher, afiher:afiher,desher:desher,} )
		navigate('/App')
	}
	return (
		<form onSubmit={store}>
			<label>Nombre Real</label>
			<input type="text" name="name" value={nomreasup} onChange={(e) =>setNomreasup(e.target.value)} required/>
			<label>Nombre De SuperHeroe</label>
			<input type="text" name="username" value={supher} onChange={(e) =>setSupher(e.target.value)} required/>
			<label>Edad</label>
			<input type="text" name="edad" value={edaher} onChange={(e) =>setEdaher(e.target.value)} required/>
			<label>Afilación</label>
			<select name="afi" value={afiher} onChange={(e) =>setAfiher(e.target.value)} required>
			<option value='Marvel'>Marvel</option>
			<option value='DC Comics'>DC Comics</option>
			</select>
			<label>Descripción</label>
			<p><textarea name="des" value={desher} onChange={(e) =>setDesher(e.target.value)} required></textarea></p>
			<button type='submit' className="btn btn-dark">AGREGAR HEROE</button>
		</form>
	)
}

export default AddUserForm
