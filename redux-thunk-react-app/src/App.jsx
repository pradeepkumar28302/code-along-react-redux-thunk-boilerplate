import { useState } from 'react'
import './App.css'
import store from './redux/store'
import { fetchData , showData, showErr } from './redux/Action'



function App() {

  const [data,setData]=useState();

  store.subscribe(()=>{
    console.log(store)
    setData(store.getState().user)
  })


  return (
    <>

    {
      data && data.map((user)=>
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )
    }
      <button onClick={fetchData}>Fetch Data</button>
    </>
  )
}

export default App