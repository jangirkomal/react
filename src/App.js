import logo from './logo.svg';
import './App.css';

import {useState} from 'react';

function App() {

  const [name,setname]=useState("")
  const [f_name,f_setname]=useState("")
  const [m_name,m_setname]=useState("")
  const [j_jaipur,j_setname]=useState("")

  return (
   

   <div class="container">
    <div class="blog">
    <p>my name is {name}   </p>
    <div>
     <label for="">name</label>
      <input type="text" placeholder="enter your name"  onChange={(e)=>setname(e.target.value)}/>
    </div>
    <div >
    <p>my f_name is {f_name}</p>
      <label for="">f_name</label>
      <input type="text" placeholder="enter your f_name" onChange={(e)=>f_setname(e.target.value)}/>
    </div>
    <div>
    <p>my m_name is {m_name}</p>
      <label for="">M_name</label>
      <input type="text" placeholder="enter your M_name" onChange={(e)=>m_setname(e.target.value)}/>
    </div>
    <div>
   <p> my address is {j_jaipur}</p>
      <label for="">address</label>
      <input type="text" placeholder="enter your address" onChange={(e)=>j_setname(e.target.value)}/>
    </div>
   </div>
</div>
  );
}

export default App;
