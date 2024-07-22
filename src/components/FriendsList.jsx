import Friend from './Friend';

function FriendsList({ friends, selectedFriend, onSelection }) {
    return (
        <ul>
            {friends.map((friend) => (
                <Friend
                    key={friend.id}
                    friend={friend}
                    selectedFriend={selectedFriend}
                    onSelection={onSelection}
                />
            ))}
        </ul>
    );
}

export default FriendsList;
