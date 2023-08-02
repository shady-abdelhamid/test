import { Fragment, useEffect, useState } from "react";
import { UserCard } from "../card/user-card";
import { Filter } from "../filter";
import { Loader } from "../../../components/UI/loaders";
import { getRepositories, getUsers } from "../../../api";
import { UserItem, Users } from "../../../interfaces/github/users.interface";
import {
  Repositories,
  RepositoryItem,
} from "../../../interfaces/github/repositories.interface";
import { RepositoryCard } from "../card/repository-card";
import { Card } from "../card/card";
import classes from "../card/styles.module.scss";

export const List = () => {
  const [data, setDate] = useState<any>([]);
  const [filter, setFilter] = useState<{
    search: string;
    option: "users" | "repositories" | null;
  }>({
    search: "",
    option: null,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    console.log(filter);

    const fetchData = async () => {
      try {
        setIsLoading(true);
        let res: any;
        if (filter && filter.search.length >= 3 && filter.option === "users") {
          res = await getUsers(filter.search);
          setDate(res?.data);
        } else if (
          filter &&
          filter.search.length >= 3 &&
          filter.option === "repositories"
        ) {
          res = await getRepositories(filter.search);
          setDate(res?.data);
        } else {
          setDate([]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [filter]);
  const onDataReceived = (filterData: any) => {
    setFilter(filterData);
  };

  const RenderResult = () => {
    if (!isLoading && filter.search) {
      return (
        <section className={classes["card"]}>
          {data?.items?.map(
            (item: UserItem | RepositoryItem) =>
              filter.option && <Card type={filter.option} item={item} />
          )}
        </section>
      );
    } else if (isLoading) {
      return <Loader count={40} />;
    } else {
      return <p>start typing to fetch Data</p>;
    }
  };

  return (
    <Fragment>
      <Filter filterData={onDataReceived} />
      {RenderResult()}
    </Fragment>
  );
};
