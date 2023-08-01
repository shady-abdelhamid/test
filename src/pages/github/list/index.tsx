import { Fragment, useEffect, useState } from "react";
import {  UserCard } from "../card/user-card";
import { Filter } from "../filter";
import { Loader } from "../../../components/UI/loaders";
import { getUsers } from "../../../api";
import { Users } from "../../../interfaces/github/users.interface";
import { Repositories } from "../../../interfaces/github/repositories.interface";

export const List = () => {
  const [data, setDate] = useState<Users | Repositories>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    setIsLoading(true)
    getUsers("mohamed").then((res) => {
      setDate(res.data);
      setIsLoading(false)
    });
  }, []);
  const onDataReceived =( data :any) => {
    console.log('The data from the child component is:', data);
  };
  return (
    <Fragment>
      <Filter filterData={onDataReceived}/>
      {!isLoading && <UserCard data={data} />}
      {isLoading && <Loader count={40}/>}
    </Fragment>
  );
};
