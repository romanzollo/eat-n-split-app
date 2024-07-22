import { useState } from 'react';

import Button from './Button';

function FormSplitBill({ selectedFriend, onSplitBill }) {
    const [bill, setBill] = useState('');
    const [paidByUser, setPaidByUser] = useState('');
    const paidByFriend = bill ? bill - paidByUser : ''; // делаем проверку так как bill может быть равен нулю
    const [whoIsPaying, setWhoIsPaying] = useState('user');

    function handleSubmit(e) {
        e.preventDefault();

        if (!bill || !paidByUser) return;

        onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);
    }

    return (
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Split a bill with {selectedFriend.name}</h2>

            <label>💰 Bill value</label>
            <input
                type="number"
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
            />

            <label>😎 Your expense</label>
            <input
                type="number"
                value={paidByUser}
                // чтобы не вышло больше чем сумма счёта
                onChange={(e) =>
                    setPaidByUser(
                        Number(e.target.value) > bill
                            ? paidByUser
                            : Number(e.target.value)
                    )
                }
            />

            <label>👫 {selectedFriend.name}'s expense</label>
            <input type="number" value={paidByFriend} disabled />

            <label>🤑 Who is paying the bill</label>
            <select
                value={whoIsPaying}
                onChange={(e) => setWhoIsPaying(e.target.value)}
            >
                <option value="user">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <Button>Split bill</Button>
        </form>
    );
}

export default FormSplitBill;
