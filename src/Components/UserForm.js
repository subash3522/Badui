import React, { useState } from 'react';

const UserForm = () => {
  const [userData, setUserData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    password: ''
  });

  const createUser = async () => {
    try {
      const response = await fetch('https://your-server-domain.com/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('User created:', data);
        // Handle success, e.g., show a success message to the user
      } else {
        console.error('Error creating user:', response.status);
        // Handle error, e.g., show an error message to the user
      }
    } catch (error) {
      console.error('Error creating user:', error);
      // Handle error, e.g., show an error message to the user
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser();
  };

  return (
    <div className="user-form-container">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={userData.name} onChange={handleInputChange} required />
        <label>Phone Number:</label>
        <input type="tel" name="phoneNumber" value={userData.phoneNumber} onChange={handleInputChange} required />
        <label>Email:</label>
        <input type="email" name="email" value={userData.email} onChange={handleInputChange} required />
        <label>Password:</label>
        <input type="password" name="password" value={userData.password} onChange={handleInputChange} required />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default UserForm;