import React, { useState, Fragment } from 'react'
import AddUserForm from '../forms/AddUserForm2'
import EditUserForm from '../forms/EditUserForm2'
import UserTable from '../tables/UserTable2'
import Image from 'react-bootstrap/Image'

const villanoImagen = require.context('../tables', true);

const App2 = () => {
	// Data
	const usersData = [
		// { id: 1, name: '', username: '', edad: '', afi: '', des:''},
	]

	const initialFormState = { id: null, name: '', username: '', 
	edad: '', afi: '', des:'' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)
		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, 
			username: user.username, edad: user.edad, 
			afi: user.afi, des: user.userdes })
	}

	return (
		<div className="container">
			<h1>ALTA DE VILLANOS</h1>
			<Image className='Imagevillano' src="villanos2.jpg"></Image>
			{/* <img src={villanoImagen("maxresdefault.jpg")}/> */}
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>EDITAR VILLANO</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>AGREGAR VILLANO</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>VER VILLANO</h2>
					<UserTable users={users} editRow={editRow}
					 deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default App2