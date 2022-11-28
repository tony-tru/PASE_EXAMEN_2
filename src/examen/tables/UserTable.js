import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {collection, getDocs, doc, deleteDoc} from 'firebase/firestore'
import {db} from '../firebaseconfig/fireBase'

const UserTable = () => {
  const [heroes, setHeroes]= useState([]);
  const heroesCollection = collection(db,"heroes");
  const getHeroes = async ()=> {
  const data = await  getDocs(heroesCollection)
  // console.log(data)
  setHeroes(
    data.docs.map((doc) => ({...doc.data(),id:doc.id}))
  )
  // console.log(heroes)
  }
  const deleteHero = async (id) => {
    const heroDoc = doc(db, "heroes",id)
    await deleteDoc(heroDoc)
    getHeroes()
  }
  useEffect(() => {
    getHeroes()
  },[])
  return(
  <table>
    <thead>
      <tr>
        <th>Nombre Real</th>
        <th>Super Heroe</th>
        <th>Edad</th>
        <th>Afilación</th>
        <th>Descripción</th>
        <th>Opcion</th>
      </tr>
    </thead>
    <tbody>
      
        {heroes.map((hero) => (
          <tr key={hero.id}>
            <td>{hero.nomreasup}</td>
            <td>{hero.supher}</td>
            <td>{hero.edaher}</td>
            <td>{hero.afiher}</td>
            <td>{hero.desher}</td>
            <td>
             <Link to= {`/EditUserForm/${hero.id}`}className="btn btn-success"><i className="fa-solid fa-pen-to-square"></i></Link>
              <button
                onClick={() => {deleteHero(hero.id)}}
                className="btn btn-danger"
              ><i className="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>

      ))}
    </tbody>
  </table>
)
        }
export default UserTable
