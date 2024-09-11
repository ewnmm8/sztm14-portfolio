import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home.js'
import { Profile, About, Crystal, Memo } from './contents.js'
import './index.scss'
import './event.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/crystal" element={<Crystal />} />
            <Route path="/memo" element={<Memo />} />
        </Routes>
    </BrowserRouter>
)