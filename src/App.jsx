import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProfileContainer from './components/main/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Nav from './components/Nav/Nav'
import News from './components/main/News/News'
import DialogsContainer from './components/main/Dialogs/DialogsContainer'
import Music from './components/main/Music/Music'
import Settings from './components/main/Settings/Settings'
import UsersContainer from './components/main/Users/UsersContainer'
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
