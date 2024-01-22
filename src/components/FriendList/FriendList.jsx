import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Friend list:</h1>
      <ul className={css.friendList}>
        {friends.map(({ isOnline, id, avatar, name }) => {
          return (
            <li key={id} className={css.item}>
              <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
