import React, { useRef, useState } from 'react';

const AddUser = () => {
	const [nameValid,setNameValid] = useState(false);
	const [emailValid,setEmailValid] = useState(false);
	const [disabled, setDisabled] = useState(true);
	const nameRef = useRef();
	const emailRef = useRef();

	// const handleOnChange = e => {
	// 	if (e.target.value)
	// }


	const handleData = e => {
		setNameValid(nameRef.current.value? true : false)
		setEmailValid(emailRef.current.value?true:false)
		const name = nameRef.current.value;
		const email = emailRef.current.value;
		console.log(nameRef.current)
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
	return (
		<div>
			<form onSubmit={handleData}>
				<label>Name</label>
				<br />
				<input type="text" placeholder="your name" ref={nameRef}  />
				<br />
				<label>Email</label>
				<br />
				<input type="email" placeholder="Email" ref={emailRef} />
				<br />

				<input type="submit" value="Submit" />
			</form>
			<br/>
			
		</div>
	);
};





export default AddUser;