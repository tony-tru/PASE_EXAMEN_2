import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getDoc, updateDoc,doc } from 'firebase/firestore'
import {db} from '../firebaseconfig/fireBase'

const EditUserForm2 = () => {
  const [nomreavil, setNomreavil]= useState('')
	const [supvil, setSupvil]= useState('')
	const [edavil, setEdavil]= useState(0)
	const [afivil, setAfivil]= useState('')
	const [desvil, setDesvil]= useState('')
  const navigate = useNavigate()
  const {id}= useParams()
  const update = async (e) =>{
    e.preventDefault()
    const villain = doc(db,"villain", id)
    const data = {nomreavil:nomreavil, supvil:supvil,edavil:edavil, afivil:afivil,desvil:desvil}
    await updateDoc(villain, data)
    navigate('/App2')
  }
  const getHeroById = async (id) => {
    const villain = await getDoc(doc(db, "villain",id))
    if (villain.exists()){
      setNomreavil(villain.data().nomreavil)
      setSupvil(villain.data().supvil)
      setEdavil(villain.data().edavil)
      setAfivil(villain.data().afivil)
      setDesvil(villain.data().desvil)
    }else{
      console.log('El villano no existe')
    }
  }
  useEffect( () => {
    getHeroById(id)
  },[])
  return (
    <div className='container'>
    <form onSubmit={update}>
    <label>Nombre Real</label>
    <input type="text" value={nomreavil} onChange={(e) =>setNomreavil(e.target.value)} />
    <label>Nombre De SuperHeroe</label>
    <input type="text"  value={supvil} onChange={(e) =>setSupvil(e.target.value)}/>
    <label>Edad</label>
    <input type="text" value={edavil} onChange={(e) =>setEdavil(e.target.value)} />
    <label>Afilación</label>
    <select  value={afivil} onChange={(e) =>setAfivil(e.target.value)}>	
    <option value='Marvel'>Marvel</option>
    <option value='DC Comics'>DC Comics</option>
    </select>
    <label>Descripción</label>
    <p><textarea value={desvil} onChange={(e) =>setDesvil(e.target.value)}></textarea></p>
    <button type='submit'>ACTUALIZAR VILLANO</button>
  </form>
  </div>
  )
}

export default EditUserForm2