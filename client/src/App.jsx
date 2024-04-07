import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './App.css';



function App(){
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(0);
  const [phonebook, setPhonebook] = useState([]);
  const [newPhone, setNewPhone] = useState('');
  
 const deletePhone = (id) => {
  Axios.delete(`http://localhost:8000/delete-phone/${id}`)
  window.location.reload();
 }

  const addNewNumber = () => {
    Axios.post('http://localhost:8000/add-phone', {name, phone})
    window.location.reload();
  }

  useEffect(() => {
    Axios.get('http://localhost:8000/get-phone')
      .then(res => {
        setPhonebook(res.data.data.phoneNumbers)
      })
    },[])
    
    const updatePhone = async (id) => {
      try {
        await Axios.put(`http://localhost:8000/update-phone/${id}`, { id, newPhone });
        // Update phonebook state after successful update
        const updatedPhonebook = phonebook.map(item => {
          if (item._id === id) {
            return { ...item, phone: newPhone };
          }
          return item;
        });
        setPhonebook(updatedPhonebook);
      } catch (error) {
        console.error('Error updating phone:', error);
      }
    };
    

return(
  <div className="container">
    <label htmlFor="">Name: </label>
    <input type="text" onChange={(e) => {
      setName(e.target.value)
    }} /><br/><br/>
    <label htmlFor="">Phone</label>
    <input type="number" onChange={(e) => {
      setPhone(e.target.value)
    }} /><br/><br/>
    <button onClick={addNewNumber}>Add New Number</button>
    <br />
    {
    phonebook.map((val, key) => {
          return <div className="phone" key={key}>
            <p>{val.name}</p>
            <p>{val.phone}</p>
            <input type="number" placeholder="update Phone..." onChange={(e) => {
                setNewPhone(e.target.value)
                // console.log(setNewPhone(e.target.value));
                value={newPhone}
            }} />
            <button className="update-btn" onClick={() => {updatePhone(val._id)}}>Update</button>
            <button className='delete-btn' onClick={() => {
              deletePhone(val._id)
            }}>Delete</button>
        </div>
    })}
    <br />



   
  </div>
);

};

export default App;