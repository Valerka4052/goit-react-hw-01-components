import PropTypes from 'prop-types';
import{Box,Image,Description,DescriptionInfo, List,Item} from './profile.styled'

export function Profile({username, tag, location, avatar, stats}) {
    return (
        <Box className="profile">
  <Description className="description">
    <Image
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <DescriptionInfo  className="name">{username}</DescriptionInfo>
    <DescriptionInfo className="tag">{tag}</DescriptionInfo>
    <DescriptionInfo className="location">{location}</DescriptionInfo>
  </Description>

  <List className="stats">
    <Item>
      <span className="label">Followers </span>
      <span className="quantity">{stats.followers}</span>
    </Item>
    <Item>
      <span className="label">Views </span>
      <span className="quantity">{stats.views}</span>
    </Item>
    <Item>
      <span className="label">Likes </span>
      <span className="quantity">{stats.likes}</span>
    </Item>
  </List>
</Box>
    )
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
};