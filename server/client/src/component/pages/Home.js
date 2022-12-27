import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../App.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Home = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(`${process.env.SERVER_URL}`)
    getData();
  }, [data])

  const getData = async () => {
    try {
      const res = await axios.get(`https://first-api-zvey.onrender.com/users`);
      if (res.status === 200) {
        setData(res.data);
      }
    } catch (error) {
      toast.error("Some thing went wrong")

    }

  }



  const deleteUser = async (id) => {
    const res = await axios.delete(`https://first-api-zvey.onrender.com/user/${id}`);
    console.log(res.data)
  }


  return (
    <div style={{ padding: "5% 30%", alignItems: 'center', textAlign: 'center' }}>
      <table style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>View</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>

          {data.map((user) => {
            return <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.contact}</td>
              <td><button onClick={((e) => { navigate(`/update/${user.id}`, { state: { userData: user } }) })}>View</button></td>
              <td><button onClick={((e) => { deleteUser(user.id) })}>Delete</button></td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Home