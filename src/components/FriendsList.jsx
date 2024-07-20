import Friend from './Friend';

import { initialFriends } from '../data/data';

function FriendsList() {
    const friends = initialFriends;

    return (
        <ul>
            {friends.map((friend) => (
                <Friend key={friend.id} friend={friend} />
            ))}
        </ul>
    );
}

export default FriendsList;
