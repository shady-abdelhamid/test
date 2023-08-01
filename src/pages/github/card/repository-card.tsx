import { FC, Fragment } from "react";
import { Repositories, RepositoryItem } from '../../../interfaces/github/repositories.interface';
import classes from "./styles.module.scss";

export const RepositoryCard: FC<any> = (props: any) => {
  return (
    <Fragment>
      <section className={classes.card}>
        {props?.data?.items?.map((item: RepositoryItem) => (
          <a
            href={item.html_url}
            className={classes["card__item"]}
            key={item?.id}
            target="_blank"
          >
            <p>{item?.owner.login}</p>
            <div className={classes.avatar}>
              <img src={item?.owner.avatar_url} />
            </div>
            <div className={classes.name}>
              <h3>{item?.description}</h3>
              <p>{item.language}</p>
              <p>{item.stargazers_count}</p>
              <p>{item.watchers_count}</p>
              <p>{item.forks_count}</p>
            </div>
          </a>
        ))}
      </section>
    </Fragment>
  );
};
