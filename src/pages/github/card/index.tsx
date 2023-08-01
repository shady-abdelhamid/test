import { FC, Fragment } from "react";
import { Repositories } from "../../../interfaces/github/repositories.interface";
import { Users } from "../../../interfaces/github/users.interface";


export const Card:FC<any> = ({ data } : any) => {
  console.log(data);
  
  return <Fragment>
    ddddd

{

  data?.items?.map((item : any)=>
    <div  key={`list-item-${item.id}`}>
    <h1> {item?.login}</h1>
   </div>
  )
}
  </Fragment>;
};
