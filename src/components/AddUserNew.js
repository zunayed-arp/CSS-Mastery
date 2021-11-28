import React, { useRef, useState } from 'react';

const AddUserNew = () => {
	const [nameValid, setNameValid] = useState(false);
	const [emailValid, setEmailValid] = useState(false);
	const [disabled, setDisabled] = useState(true);
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');

	// const handleOnChange = e => {
	// 	if (e.target.value)
	// }


	// const handleData = e => {
	// 	setNameValid(nameRef.current.value ? true : false)
	// 	setEmailValid(emailRef.current.value ? true : false)
	// 	const name = nameRef.current.value;
	// 	const email = emailRef.current.value;
	// 	console.log(nameRef.current)
	// 	const newUser = {
	// 		name: name,
	// 		email: email
	// 	}
	// 	console.log(newUser);

	// 	fetch('http://localhost:5000/users', {
	// 		method: 'POST',
	// 		headers: {
	// 			'content-type': 'application/json'
	// 		},
	// 		body: JSON.stringify(newUser)
	// 	})
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			if (data.insertedId) {
	// 				alert('User Added succesfully')
	// 				e.target.reset();
	// 			}
	// 			console.log(data)
	// 		})

	// 	e.preventDefault();

	// }



	const handleNameChange = e =>{
		setName(e.target.value)
	}
	const handleEmailChange = e =>{
		setEmail(e.target.value)
	}

	const handleSubmit = e =>{

		const newUser = {
			name: name,
			email: email
		}
		console.log(newUser);

		fetch('http://localhost:5000/users', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(newUser)
		})
			.then(res => res.json())
			.then(data => {
				if (data.insertedId) {
					alert('User Added succesfully')
					e.target.reset();
				}
				console.log(data)
			})
		e.preventDefault();
	}

	const isEnabled = name.length > 0 && email.length>0; 
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>Name</label>
				<br />
				<input
					type="text"
					placeholder="your name"
					value={name}
					onChange={handleNameChange}

				/>
				<br />
				<label>Email</label>
				<br />
				<input 
				type="email" 
				placeholder="Email" 
				value={email}
				onChange={handleEmailChange}
				 />
				<br />

				<input disabled={!isEnabled} type="submit" value="Submit" />
			</form>
			<br />

		</div>
	);
};





export default AddUserNew;