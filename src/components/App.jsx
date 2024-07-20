// import { useState } from 'react';

import FormAddFriend from './FormAddFriend';
import FriendsList from './FriendsList';
import Button from './Button';
import FormSplitBill from './FormSplitBill';
function App() {
    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList />
                <FormAddFriend />
                <Button>Add friend</Button>
            </div>

            <FormSplitBill />
        </div>
    );
}

export default App;
