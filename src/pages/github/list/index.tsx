import { Fragment, useEffect, useState } from "react";
import { Card } from "../card";
import { Filter } from "../filter";
import { Loader } from "../../../components/UI/loaders";
import { getUsers } from '../../../api';
import { Users } from "../../../interfaces/github/users.interface";
import { Repositories } from "../../../interfaces/github/repositories.interface";


export const List = () => {
  const [data, setDate] = useState<Users | Repositories>()
useEffect(()=>{
  getUsers('mohamed').then(res=>{
    setDate(res.data);
  })

},[])
  return (
    <Fragment>
      <Filter />
      <Card data={data}/>
      {/* <Loader count={20}/> */}
    </Fragment>
  );
};
