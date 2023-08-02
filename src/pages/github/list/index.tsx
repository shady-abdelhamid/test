import { Fragment, useEffect, useState, useReducer } from "react";
import { UserCard } from "../card/user-card";
import { Filter } from "../filter";
import { Loader } from "../../../components/UI/loaders";
import { getRepositories, getUsers } from "../../../api";
import { Users } from "../../../interfaces/github/users.interface";
import { Repositories } from "../../../interfaces/github/repositories.interface";
import { RepositoryCard } from "../card/repository-card";

const initialState = {
  data: [],
  isLoading: false,
  filter: { search: "", option: "" },
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export const List = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "SET_LOADING", payload: true });
        let res: any;
        if (state.filter && state.filter.option === "users") {
          res = await getUsers(state.filter.search);
        } else if (state.filter && state.filter.option === "repositories") {
          res = await getRepositories(state.filter.search);
        } else {
          dispatch({ type: "SET_DATA", payload: "" });
        }
        dispatch({ type: "SET_DATA", payload: res.data });
      } catch (error) {
        console.error(error);
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };
    fetchData();
  }, [state.filter]);

  const onDataReceived = (filterData: any) => {
    dispatch({ type: "SET_FILTER", payload: filterData });
  };

  return (
    <>
      <Filter filterData={onDataReceived} />
      {state.filter &&
        !state.isLoading &&
        state.filter.option === "repositories" && (
          <RepositoryCard data={state.data} />
        )}
      {state.filter && !state.isLoading && state.filter.option === "users" && (
        <UserCard data={state.data} />
      )}
      {state.isLoading && state.filter && <Loader count={40} />}
    </>
  );
};
