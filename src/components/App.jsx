import { useState } from 'react';

import FormAddFriend from './FormAddFriend';
import FriendsList from './FriendsList';
import Button from './Button';
import FormSplitBill from './FormSplitBill';

import { initialFriends } from '../data/data';

function App() {
    const [friends, setFriends] = useState(initialFriends);
    const [showAddFriend, setShowAddFriend] = useState(false);
    const [selectedFriend, setSelectedFriend] = useState(null);

    // отображения формы добавления друга
    function handleShowAddFriend() {
        // используем callback для изменения состояния так как новое состояние
        // зависет от текущего состояния (ОБЯЗАТЕЛЬНО!!!)
        setShowAddFriend((show) => !show);
    }

    // добавление друга
    function handleAddFriend(newFriend) {
        setFriends((friends) => [...friends, newFriend]);
        // закрываем форму
        setShowAddFriend(false);
    }

    // выбор друга
    function handleSelection(friend) {
        // setSelectedFriend(friend);

        // используем опциональную цепочка (?.) так как selectedFriend может быть null
        // или вместо null используем false
        setSelectedFriend((cur) => (cur?.id === friend.id ? false : friend));

        // закрываем форму добавления друга если он открыт и мы выбираем уже существующего друга
        // (для удобства пользователя)
        setShowAddFriend(false);
    }

    // разделение счёта
    function handleSplitBill(value) {
        setFriends((friends) =>
            friends.map((friend) =>
                friend.id === selectedFriend.id
                    ? { ...friend, balance: friend.balance + value }
                    : friend
            )
        );

        setSelectedFriend(null);
    }

    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList
                    friends={friends}
                    selectedFriend={selectedFriend}
                    onSelection={handleSelection}
                />

                {showAddFriend && (
                    <FormAddFriend onAddFriend={handleAddFriend} />
                )}

                {/* children компонента Button для отображения текста внутри кнопки */}
                <Button onClick={handleShowAddFriend}>
                    {showAddFriend ? 'Close' : 'Add friend'}
                </Button>
            </div>

            {selectedFriend && (
                <FormSplitBill
                    selectedFriend={selectedFriend}
                    onSplitBill={handleSplitBill}
                />
            )}
        </div>
    );
}

export default App;
