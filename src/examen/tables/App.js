import React, { useState, Fragment } from 'react'
import AddUserForm from '../forms/AddUserForm'
import EditUserForm from '../forms/EditUserForm'
import UserTable from '../tables/UserTable'
import Image from 'react-bootstrap/Image'

const heroeImagen = require.context('../tables', true);

const App = () => {
	// Data
	const usersData = [
		// { id: 1, name: '', username: '', edad: '', afi: '', des:''},
	]

	const initialFormState =
	 { id: null, name: '', username: '', edad: '', afi: '', des:'' }

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

		setCurrentUser({ id: user.id, name: user.name, username: user.username, edad: user.edad, afi: user.afi, des: user.userdes })
	}

	return (
		<div className="container">
			<h1>ALTA DE HEROES</h1>
			<Image className='ImageHeroe'src="dcmarvel.jpeg"></Image>
			{/* <img src={heroeImagen("dcmarvel.jpeg")} /> */}
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>EDITAR HEROE</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>AGREGAR HEROE</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>VER HEROE</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default App
