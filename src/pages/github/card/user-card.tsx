import { FC } from "react";
import { UserItem } from "../../../interfaces/github/users.interface";
import classes from "./styles.module.scss";

type UserCardProps = {
  item: UserItem;
}

export const UserCard: FC<UserCardProps> = ({item}) => {
  return (
          <a
            href={item.html_url}
            className={classes["user_card__item"]}
            key={item?.id}
            target="_blank" rel="noreferrer"
          >
            <div className={classes["user_avatar"]}>
              <img src={item?.avatar_url} alt="" />
            </div>
            <div className={classes["user_name"]}>
              <h4>{item?.login}</h4>
            </div>
          </a>
       
  );
};
