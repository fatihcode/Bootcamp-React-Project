import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Video from './Video'
import NotFound from './NotFound'

export default function Menu() {

    return (
        <div>
            
            <Link to="video/fast">Fast</Link> | { }
            <Link to="video/slow">Slow</Link> | { }
            <Link to="video/cute">Cute</Link> | { }
            <Link to="video/eek">Eek</Link>

            <Routes>
                <Route path="video/:id" element={<Video />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

        </div>
    )
}
