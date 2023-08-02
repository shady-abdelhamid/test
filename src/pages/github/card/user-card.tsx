import { FC, Fragment } from "react";
import { UserItem, Users } from "../../../interfaces/github/users.interface";
import classes from "./styles.module.scss";

export const UserCard: FC<any> = (props: any) => {
  return (
    <Fragment>
      <section className={classes["user_card"]}>
        {props?.data?.items?.map((item: UserItem) => (
          <a
            href={item.html_url}
            className={classes["user_card__item"]}
            key={item?.id}
            target="_blank"
          >
            <div className={classes["user_avatar"]}>
              <img src={item?.avatar_url} />
            </div>
            <div className={classes["user_name"]}>
              <h4>{item?.login}</h4>
            </div>
          </a>
        ))}
      </section>
    </Fragment>
  );
};
