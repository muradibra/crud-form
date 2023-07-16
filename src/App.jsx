import { useState } from 'react'
import Form from "./components/Form"
import List from "./components/List"

function App() {
  const [data, setData] = useState([])
  return (
    <div className='flex justify-center'>
      <Form data={data} setData={setData} />
      <List data={data} setData={setData} />
    </div>
  )
}

export default App
