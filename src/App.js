import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LandingPage from './components/landing'
import LoginPage from './components/login'
import RegisterPage from './components/register'
import ForgetPasswordPage from './components/forgotPassword'
import HomePage from './components/home'

import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/forget-password" element={<ForgetPasswordPage />} />
                    <Route path="/home" element={<HomePage />}/>
                </Routes>
            </div>
        </Router>
    )
}