import { useState } from 'react';

import FormAddFriend from './FormAddFriend';
import FriendsList from './FriendsList';
import Button from './Button';
import FormSplitBill from './FormSplitBill';

import { initialFriends } from '../data/data';

function App() {
    const [friends, setFriends] = useState(initialFriends);
    const [showAddFriend, setShowAddFriend] = useState(false);

    function handleShowAddFriend() {
        // используем callback для изменения состояния так как новое состояние
        // зависет от текущего состояния (ОБЯЗАТЕЛЬНО!!!)
        setShowAddFriend((show) => !show);
    }

    function handleAddFriend(newFriend) {
        setFriends((friends) => [...friends, newFriend]);
        // закрываем форму
        setShowAddFriend(false);
    }

    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList friends={friends} />
                {showAddFriend && (
                    <FormAddFriend onAddFriend={handleAddFriend} />
                )}

                {/* children компонента Button для отображения текста внутри кнопки */}
                <Button onClick={handleShowAddFriend}>
                    {showAddFriend ? 'Close' : 'Add friend'}
                </Button>
            </div>

            <FormSplitBill />
        </div>
    );
}

export default App;
