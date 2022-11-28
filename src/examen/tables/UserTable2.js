import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {collection, getDocs, doc, deleteDoc} from 'firebase/firestore'
import {db} from '../firebaseconfig/fireBase'

const UserTable2 = () => {
  const [villains, setVillains]= useState([]);
  const villainsCollection = collection(db,"villain");
  const getVillains = async ()=> {
  const data = await  getDocs(villainsCollection)
  // console.log(data)
  setVillains(
    data.docs.map((doc) => ({...doc.data(),id:doc.id}))
  )
  // console.log(heroes)
  }
  const deleteVillain = async (id) => {
    const villainDoc = doc(db, "villain",id)
    await deleteDoc(villainDoc)
    getVillains()
  }
  useEffect(() => {
    getVillains()
  },[])
  return(
  <table>
    <thead>
      <tr>
        <th>Nombre Real</th>
        <th>Villano</th>
        <th>Edad</th>
        <th>Afilación</th>
        <th>Descripción</th>
        <th>Opcion</th>
      </tr>
    </thead>
    <tbody>
        {villains.map((villain) => (
          <tr key={villain.id}>
            <td>{villain.nomreavil}</td>
            <td>{villain.supvil}</td>
            <td>{villain.edavil}</td>
            <td>{villain.afivil}</td>
            <td>{villain.desvil}</td>
            <td>
              
              <Link to= {`/EditUserForm2/${villain.id}`}className="btn btn-success"><i className="fa-solid fa-pen-to-square"></i></Link>

              <button
               onClick={() => {deleteVillain(villain.id)}}
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
export default UserTable2