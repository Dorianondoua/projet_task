import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { BoardContext } from './context/BoardContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';

function App() {
  const boardData = {
    active:0,
    boards:[
      {
        name:'My Task Board',
        bgcolor:'#069',
        list:[
          {id:"1",title:"To do",items:[{id:"cdrFt",title:"Project Description 1"}]},
          {id:"2",title:"In Progress",items:[{id:"cdrFv",title:"Project Description 2"}]},
          {id:"3",title:"Done",items:[{id:"cdrFb",title:"Project Description 3"}]}
        ]
      }
    ]
  }
  const [allboard,setAllBoard] = useState(boardData); 
  
  return (
    <>
        <Router>
        <Routes>

        <Route path="/" element= {<Login/>}> </Route>
        <Route path="/register" element= {<Register/>}> </Route>
        <Route path="/home" element= {<>  <Header></Header>
    <BoardContext.Provider value={{allboard,setAllBoard}}>
      <div className='content flex'>
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
    </BoardContext.Provider></>}> </Route>
 
      </Routes>
  
     </Router>
    </>
  )
}

export default App
