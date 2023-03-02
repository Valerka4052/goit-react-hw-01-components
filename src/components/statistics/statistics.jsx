import PropTypes from 'prop-types';
import { Container,List,Item,Title } from './Statistics.styled';

export function Statistics({stats, title}) {
  return (
    <Container className="statistics">
     {title && <Title className="title">{title}</Title>}
      <List className="stat-list">
        {stats.map(({ percentage, label, id }) => {
          return (
            <Item className="item" key={id} >
              <span className="label">{label} </span>
              <span className="percentage">{percentage}%</span>
            </Item>)
        })}
      </List>
    </Container>
  )
};

Statistics.propTypes = {
  title:PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      percentage: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
};