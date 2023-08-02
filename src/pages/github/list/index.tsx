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
    console.log(filter);
    
    const fetchData = async () => {
      try {
        setIsLoading(true);
        let res: any;
        if (filter && filter.search.length >= 3&& filter.option === "users") {
          res = await getUsers(filter.search);
        setDate(res?.data);

        } else if (filter && filter.search.length >= 3 && filter.option === "repositories") {
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
    if (!filter) {
      return <p>No Data</p>;
    } else if (!isLoading && filter.option === "repositories") {
      return <RepositoryCard data={data} />;
    } else if (!isLoading && filter.option === "users") {
      return <UserCard data={data} />;
    } else if (isLoading && filter) {
      return <Loader count={40} />;
    } else {
      return <p>No Data</p>;
    }
  };
  return (
    <Fragment>
      <Filter filterData={onDataReceived} />
      {RenderResult()}
    </Fragment>
  );
};
