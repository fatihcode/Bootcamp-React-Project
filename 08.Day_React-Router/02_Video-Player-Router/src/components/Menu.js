import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Video from './Video'

export default function Menu() {

    return (
        <div>

            <Link to="/fast">Fast</Link>
            <Link to="/slow">Slow</Link>
            <Link to="/cute">Cute</Link>
            <Link to="/eek">Eek</Link>

            <Routes>
                <Route index element={<Video />} />
                <Route path="/:id" element={<Video />} />
            </Routes>

        </div>
    )
}