import css from "../../css/task1/Profile.module.css"

export const Profile = ({ name, tag, location, image, stats: { followers, views, likes } }) => {
    return (<div className={css.card}>
        <div className={css.box}>
            <img className={css.img} src={image} alt="User avatar" />
            <p className={css.name}>{name}</p>
            <p className={css.text}>{tag}</p>
            <p className={css.text}>{location}</p>
        </div>

        <ul className={css.list}>
            <li className={css.item}>
                <span>Followers</span>
                <span className={css.number}>{followers}</span>
            </li>
            <li className={css.item}>
                <span>Views</span>
                <span className={css.number}>{views}</span>
            </li>
            <li className={css.item}>
                <span>Likes</span>
                <span className={css.number}>{likes}</span>
            </li>
        </ul>
    </div>);
}