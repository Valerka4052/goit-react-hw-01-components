import PropTypes from 'prop-types';
import { Item, Status } from './FriendsListItem.styled';

export function FriendListItem({avatar, name, isOnline}) {
    return (<Item className="item">
        <Status className="status" status={isOnline}></Status>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </Item>);
 }

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};