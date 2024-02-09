import { FriendListItem } from "./FriendListItem"
import css from "../../css/task2/FriendList.module.css"

export const FriendList = ({ friends }) => {
    return (<ul className={css.list}>
        {friends.map(friend => {
            return <li className={css.item} key={friend.id}>
                <FriendListItem friend={friend} />
            </li>
        })}
    </ul>);
}