import { Profile } from './profile/profile';
import { Statistics } from './statistics/statistics';
import { FriendList } from "./friendlist/friendlist";
import {TransactionHistory} from './transactionHistory/transactionHistory'
import user from '../components/profile/user.json';
import data from '../components/statistics/data.json';
import friends from '../components/friendlist/friends.json';
import transactions from '../components/transactionHistory/transactions.json'

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
        <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

