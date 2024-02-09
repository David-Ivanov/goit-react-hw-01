import css from "../../css/task2/FriendListItem.module.css"

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
    return (<>
        <img src={avatar} alt="Avatar" width="48" />
        <p>{name}</p>
        {isOnline ? <p className={css.online}>Online</p> : <p className={css.offline}>Offline</p>}
    </>)
}