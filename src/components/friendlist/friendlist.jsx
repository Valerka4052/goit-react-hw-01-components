import PropTypes from 'prop-types';
import { List, Item,Status } from './friendlist.styled';

export function FriendList({friends}) {
    return (
        <List className="friend-list">
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (<Item className="item" key={id}>
                    <Status className="status" status={isOnline}></Status>
                    <img className="avatar" src={avatar} alt="User avatar" width="48" />
                    <p className="name">{name}</p>
                </Item>)
            })}
        </List>);
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        }))
};