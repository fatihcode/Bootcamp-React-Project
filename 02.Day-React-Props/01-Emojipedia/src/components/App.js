import React, { Component } from 'react';
import emojipedia from '../emojipedia.js';
import Entry from './Entry.js';


export default function App() {
    console.log(emojipedia)
    return <div>

        <h1><span>Emojipedia</span></h1>

        <div className="dictionary">
            {emojipedia.map(item => <Entry key={item.id} emoji={item.emoji} name={item.name} meaning={item.meaning} />)}

        </div>

    </div>
}

