import PropTypes from 'prop-types';
import { List } from "./FriendsList.styled";
import { FriendListItem } from '../FriendlistItem/FriendsListItem'


export function FriendsList({ friends }) {
    return (<List className="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) => {
            return (<FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />)
        })}
    </List>)
};

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
};