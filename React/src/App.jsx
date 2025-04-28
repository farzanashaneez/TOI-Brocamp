import { useState } from 'react'
import './App.css'

import {BrowserRouter as Router,Route,Routes}from 'react-router-dom'
import Home from './pages/Home'
import PrivateComponent from './pages/PrivateComponent'
function App() {
  const [count, setCount] = useState(0)
  // throw new Error('Test error!');

  return (
    <>
    
      <Router>
        <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/private' element={<PrivateComponent user={{name:'farz'}}/> }>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
       
      </Router>
   
    </>
  )
}
const Dashboard = () => <h2>Dashboard</h2>;
const Settings = () => <h2>Settings</h2>;
const Profile = () => <h2>Profile</h2>;
export default App
