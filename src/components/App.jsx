import { useState } from 'react';

import FormAddFriend from './FormAddFriend';
import FriendsList from './FriendsList';
import Button from './Button';
import FormSplitBill from './FormSplitBill';
function App() {
    const [showAddFriend, setShowAddFriend] = useState(false);

    function handleShowAddFriend() {
        // используем callback для изменения состояния так как новое состояние
        // зависет от текущего состояния (ОБЯЗАТЕЛЬНО!!!)
        setShowAddFriend((show) => !show);
    }

    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList />
                {showAddFriend && <FormAddFriend />}

                <Button onClick={handleShowAddFriend}>
                    {showAddFriend ? 'Close' : 'Add friend'}
                </Button>
            </div>

            <FormSplitBill />
        </div>
    );
}

export default App;
