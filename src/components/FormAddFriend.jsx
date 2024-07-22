import { useState } from 'react';

import Button from './Button';
function FormAddFriend({ onAddFriend }) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('https://i.pravatar.cc/48');

    // при сабмите формы обязательно передаем объект события (event)
    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !image) return;

        // генерируем уникальный идентификатор с помощью встроенной в браузер криптографии
        // в старых браузерах работать не будет
        const id = crypto.randomUUID();

        // создаем нового друга
        const newFriend = {
            id,
            name,
            image: `${image}?=${id}`,
            balance: 0,
        };

        onAddFriend(newFriend);

        setName('');
        setImage('https://i.pravatar.cc/48');
    }

    return (
        <form
            className="form-add-friend"
            onSubmit={(e) => {
                handleSubmit(e);
            }}
        >
            <label htmlFor="name">👫 Friend name</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="image">🌄 Image URL</label>
            <input
                type="text"
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />

            <Button>Add</Button>
        </form>
    );
}

export default FormAddFriend;
