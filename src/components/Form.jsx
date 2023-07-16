import React, { useState } from 'react'

function Form({ data, setData }) {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        id: ''
    })
    const [error, setError] = useState("")


    const { name, surname, email } = formData

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()


        if (name && surname && email) {
            setData([...data, { ...formData, id: Date.now() }])
            setFormData({
                name: '',
                surname: '',
                email: '',
                id: ''
            })
            console.log("formData", formData);
        } else {
            setError("Fill Out the Form")
            setTimeout(() => {
                setError("")
            }, 2000);
        }
        console.log("data", data);
    }

    return (
        <form className='m-2 pr-5 border-black border-r-[2px]'>
            <div className='mb-2'>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" className='border border-black pl-1' value={name} onChange={handleChange} />
            </div>
            <div className='mb-2'>
                <label htmlFor="surname">Surname: </label>
                <input type="text" name="surname" id="surname" className='border border-black pl-1' value={surname} onChange={handleChange} />
            </div>
            <div className='mb-2'>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" id="email" className='border border-black pl-1' value={email} onChange={handleChange} />
            </div>
            <button className='bg-black text-white px-3 rounded-lg' onClick={handleSubmit}>Submit</button>
            <h1 className='text-5xl font-bold text-red-600'>{error}</h1>
        </form>
    )
}

export default Form