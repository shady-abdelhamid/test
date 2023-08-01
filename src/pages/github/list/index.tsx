import { Fragment, useEffect, useState } from "react";
import { UserCard } from "../card/user-card";
import { Filter } from "../filter";
import { Loader } from "../../../components/UI/loaders";
import { getRepositories, getUsers } from "../../../api";
import { Users } from "../../../interfaces/github/users.interface";
import { Repositories } from "../../../interfaces/github/repositories.interface";
import { RepositoryCard } from "../card/repository-card";

export const List = () => {
  const [data, setDate] = useState<any>([]);
  const [filter, setFilter] = useState<{ search: string; option: string }>({
    search: "",
    option: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    if (filter && filter.option === "users") {
      setIsLoading(true);
      getUsers(filter.search).then((res) => {
        setDate(res.data);
        setIsLoading(false);
      });
    } else if (filter && filter.option === "repositories") {
      setIsLoading(true);
      getRepositories(filter.search).then((res) => {
        setDate(res.data);
        setIsLoading(false);
      });
    } else {
      setDate([]);
    }
  }, [filter]);
  const onDataReceived = (filterData: any) => {
    setFilter(filterData);
  };
  return (
    <Fragment>
      <Filter filterData={onDataReceived} />
      {/* {!isLoading && filter && <UserCard data={data} />} */}
      {!isLoading && filter && <RepositoryCard data={data} />}
      {isLoading && filter && <Loader count={40} />}
    </Fragment>
  );
};
