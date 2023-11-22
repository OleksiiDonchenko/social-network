import React from 'react'
import './App.css'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Nav from './components/Nav/Nav'
import News from './components/News/News'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer'
import { Route, Routes } from 'react-router-dom'
import LoginContainer from './components/Login/LoginContainer'

function App() {

  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Nav />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/' element={<News />} />
          <Route path='/profile/:userId?' element={<ProfileContainer />} />
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/login' element={<LoginContainer />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
