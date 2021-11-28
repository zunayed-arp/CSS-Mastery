import React, { useEffect, useState } from 'react';

const ShowUser = () => {
	const [user, setUser] = useState([])

	useEffect(() => {
		fetch('http://localhost:5000/users')
			.then(res => res.json())
			.then(data => {
				// console.log(data)
				setUser(data)
			})
	}, [user]);


	const handleDeleteUser = id =>{
		const confirmation = window.confirm('Confirm to delete');
		if(confirmation){
			const url = `http://localhost:5000/users/${id}`
			fetch(url,{
				method:'DELETE',
				
			})
			.then(res=>res.json())
			.then(data=>{
				console.log(data)
			})
		}
	}

	return (

		<div className="container">

		{
				
					user.map(userr => (<div key={userr._id}>
						<table className="table">
							<thead>
								<tr>
									<th scope="col"></th>
									<th scope="col">name</th>
									<th scope="col">email</th>
								
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">{}</th>
									<td>{userr.name}</td>
									<td>{userr.email}</td>
									<button onClick={()=>handleDeleteUser(userr._id)} >Delete</button>
								</tr>
					
						
							</tbody>
						</table>
					</div>))
			

		}
		
		</div>

	);
};

export default ShowUser;