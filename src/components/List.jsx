import React from 'react'
import ListItem from './ListItem'


function List({ data, setData }) {
    return (
        <ul className='m-2'>
            {
                data.map((item, index) => <ListItem key={index} {...item} data={data} setData={setData} />)
            }
        </ul>
    )
}

export default List