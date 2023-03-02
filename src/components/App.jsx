import { Profile } from './Profile1/Profile';
import { Statistics } from './Statistics1/Statistics';
import { FriendsList } from './FriendsList1/FriendsList';
import { TransactionHistory } from './TransactionHistory1/TransactionHistory';
import user from './Profile1/user.json';
import data from './Statistics1/data.json';
import friends from './FriendlistItem1/friends.json';
import transactions from './TransactionHistory1/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }
}>
        <Profile
 username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
            <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

