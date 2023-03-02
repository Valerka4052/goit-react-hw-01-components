import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendsList/FriendsList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendlistItem/friends.json';
import transactions from './TransactionHistory/transactions.json';

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

