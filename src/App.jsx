import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import ProfileContainer from './components/Profile/ProfileContainer'
import Nav from './components/Nav/Nav'
import News from './components/News/News'
import Dialogs from './components/Dialogs/Dialogs'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/' element={<News />}></Route>
          <Route path='/profile/:userId?' element={<ProfileContainer />}></Route>
          <Route path='/dialogs' element={<Dialogs />}></Route>
          <Route path='/music' element={<Music />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
          <Route path='/users' element={<UsersContainer />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
