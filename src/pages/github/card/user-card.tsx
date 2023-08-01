import { FC, Fragment } from "react";
import { Repositories } from "../../../interfaces/github/repositories.interface";
import { UserItem, Users } from "../../../interfaces/github/users.interface";
import classes from "./styles.module.scss";
export const UserCard: FC<any> = (props: any) => {
  return (
    <Fragment>
      <section className={classes.card}>
        {props?.data?.items?.map((item: UserItem) => (
          <a
            href={item.html_url}
            className={classes["card__item"]}
            key={item?.id}
            target="_blank"
          >
            <div className={classes.avatar}>
              <img src={item?.avatar_url} />
            </div>
            <div className={classes.name}>
              <h3>{item?.login}</h3>
              <p>{item.type}</p>
            </div>
          </a>
        ))}
      </section>
    </Fragment>
  );
};
