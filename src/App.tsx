import  { BrowserRouter, Routes, Route } from 'react-router-dom';

import './global.css'

import { Layout } from './components/layouts/Layout';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { Feed } from './pages/Feed';
import { NotFound } from './pages/NotFound';

import { useState } from 'react';

import { IUser } from './types/User.interface';

const defaultUser = {
  name: '',
  role: '',
  avatarUrl: '/src/assets/github.png'
}

function App() {
  const [user, setUser] = useState<IUser>(defaultUser);

  function handleLogin(data: IUser) {
    const newUser = {...data};

    setUser(newUser);
  }

  function handleUpdateProfile(updatedUser: IUser) {
    setUser(updatedUser);
  }

  function handleLogout() {
    setUser(defaultUser);
  }
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login onLogin={handleLogin} />} />
            <Route path="feed" element={<Feed user={user} onLogout={handleLogout} />} />
            <Route path="profile" element={<Profile user={user} onUpdateProfile={handleUpdateProfile} />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App