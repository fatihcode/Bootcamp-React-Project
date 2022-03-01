import React from 'react'
import { useParams } from 'react-router-dom'

export default function Message() {
    let message = useParams()
    return (
        <h2>This is my Messages "{message.id}"</h2>
  )
}
