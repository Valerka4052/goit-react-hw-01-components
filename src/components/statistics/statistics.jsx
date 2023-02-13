import PropTypes from 'prop-types';
import { Container,List,Item,Title } from './statistics.styled';

export function Statistics({stats, title}) {
    return (
         <Container className="statistics">
  <Title className="title">{title}</Title>
  <List className="stat-list">
   {stats.map(({percentage,label,id}) => {return (
    <Item className="item"key={id} >
      <span className="label">{label} </span>
      <span className="percentage">{percentage}%</span>
    </Item>)})}
  </List>
</Container>
    )
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      percentage: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  )
};