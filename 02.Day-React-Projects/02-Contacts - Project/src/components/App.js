import React from 'react';
import contacts from '../contacts';
import Card from './Card';

export default function App() {

    return <div>
        <h1 className="heading">My Contacts</h1>
        {contacts.map(item => <Card key={item.id} name={item.name} email={item.email} phone={item.phone} img={item.imgURL} />)}
    </div>
}