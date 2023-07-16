import React from 'react'
import { BsFillTrashFill } from "react-icons/bs"

function ListItem({ data, setData, name, surname, email, id }) {
    function handleDelete(id) {
        const newList = data.filter(item => item.id !== id)
        setData(newList)
        console.log(data);
    }

        return (
            <li className='border border-black flex justify-between items-center '>
                <div>
                    <p>Name: {name}</p>
                    <p>Surname: {surname}</p>
                    <p>Email: {email}</p>
                </div>
                <div>
                    <BsFillTrashFill className='cursor-pointer' onClick={() => handleDelete(id)}/>
                </div>
            </li>
        )
    }

export default ListItem