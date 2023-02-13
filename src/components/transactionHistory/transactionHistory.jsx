import PropTypes from 'prop-types';
import {Box,Headers,Data,Section} from './transactionHistory.styled'
export function TransactionHistory({items}) {
      return(
    <Box className="transaction-history">
  <thead>
    <Section>
      <Headers>Type</Headers>
      <Headers>Amount</Headers>
      <Headers>Currency</Headers>
    </Section>
    </thead>
    <tbody >
           { items.map(({id, type, amount, currency})=>{return(
      <Section key={id}>
      <Data>{type}</Data>
      <Data>{amount}</Data>
      <Data>{currency}</Data>
    </Section>
   )})}
 </tbody>
</Box>)
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
};