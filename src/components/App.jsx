import { Profile } from "./task1/Profile";
import { FriendList } from "./task2/FriendList"
import { TransactionHistory } from "./task3/TransactionHistory";

import userData from "../json/userData.json";
import friends from "../json/friends.json"
import transactions from "../json/transactions.json"

export const App = () => {
    return (
        <>
            <Profile
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                image={userData.avatar}
                stats={userData.stats}
            />

            <FriendList friends={friends} />

            <TransactionHistory transactions={transactions} />
        </>
    );
};