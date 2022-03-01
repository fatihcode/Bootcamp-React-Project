import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Message from './Message'


export default function Messages() {

    return (
        <div>

            <ul>
                <li><Link to="message/Mesaj1">Mesaj Numarası - 1</Link> </li>
                <li><Link to="message/Mesaj2">Mesaj Numarası - 2</Link> </li>
                <li><Link to="message/Mesaj3">Mesaj Numarası - 3</Link> </li>
            </ul>
            
            <Routes>
                <Route path="message/:id" element={<Message />} />
            </Routes>

        </div>

    )
}
