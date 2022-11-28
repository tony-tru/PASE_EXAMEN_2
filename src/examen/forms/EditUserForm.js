import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getDoc, updateDoc,doc } from 'firebase/firestore'
import {db} from '../firebaseconfig/fireBase'


const EditUserForm = () => {
  const [nomreasup, setNomreasup]= useState('')
	const [supher, setSupher]= useState('')
	const [edaher, setEdaher]= useState(0)
	const [afiher, setAfiher]= useState('')
	const [desher, setDesher]= useState('')
  const navigate = useNavigate()
  const {id}= useParams()
  const update = async (e) =>{
    e.preventDefault()
    const hero = doc(db,"heroes", id)
    const data = {nomreasup:nomreasup, supher:supher,edaher:edaher, afiher:afiher,desher:desher}
    await updateDoc(hero, data)
    navigate('/App')
  }
  const getHeroById = async (id) => {
    const hero = await getDoc(doc(db, "heroes",id))
    if (hero.exists()){
      setNomreasup(hero.data().nomreasup)
      setSupher(hero.data().supher)
      setEdaher(hero.data().edaher)
      setAfiher(hero.data().afiher)
      setDesher(hero.data().desher)
    }else{
      console.log('El heroe no existe')
    }
  }

  useEffect( () => {
    getHeroById(id)
  },[])

  return (
    <div className='container'>
    <form onSubmit={update}>
    <label>Nombre Real</label>
    <input type="text" value={nomreasup} onChange={(e) =>setNomreasup(e.target.value)} />
    <label>Nombre De SuperHeroe</label>
    <input type="text"  value={supher} onChange={(e) =>setSupher(e.target.value)}/>
    <label>Edad</label>
    <input type="text" value={edaher} onChange={(e) =>setEdaher(e.target.value)} />
    <label>Afilación</label>
    <select  value={afiher} onChange={(e) =>setAfiher(e.target.value)}>	
    <option value='Marvel'>Marvel</option>
    <option value='DC Comics'>DC Comics</option>
    </select>
    <label>Descripción</label>
    <p><textarea value={desher} onChange={(e) =>setDesher(e.target.value)}></textarea></p>
    <button type='submit'>ACTUALIZAR HEROE</button>
  </form>
  </div>
  )
}

export default EditUserForm
