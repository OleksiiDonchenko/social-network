import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Sidebar from './components/Sidebar/Sidebar'
import News from './components/News/News'
import Dialogs from './components/Dialogs/Dialogs'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import Users from './components/Users/Users'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className='app-wrapper'>
      <Header />
      <Sidebar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/' element={<News />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/dialogs' element={<Dialogs />}></Route>
          <Route path='/music' element={<Music />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
          <Route path='/users' element={<Users />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
