import Profile from "components/Profile/Profile";
import Statistics from "components/Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory"
import person from "../data/user.json"
import data from "../data/data.json"
import friends from "../data/friends.json"
import transactions from "../data/transactions.json"

function App() {
  return (
    <>
      <Profile person={person} />
      <Statistics title="upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions } />
    </>
  )
}

export default App;