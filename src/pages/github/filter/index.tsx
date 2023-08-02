import { useCallback, useEffect, useReducer, useState } from "react";
import { Input } from "../../../components/UI/Input/input";
import { Header } from "../header";
import classes from "./filter.module.css";
import { Select, Option } from "../../../components/UI/select";
import { debounce } from "lodash";

const reducer = (state: any, action: { type: any; payload: any }) => {
  switch (action.type) {
    case "SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.payload,
        animatedClass: action.payload
          ? "align-items-start"
          : "align-items-center",
      };
    case "SELECTED_OPTION":
      return {
        ...state,
        selectedOption: action.payload,
        animatedClass: "align-items-start",
      };
    default:
      return state;
  }
};
const options: Option[] = [
  { value: "users", label: "Users" },
  { value: "repositories", label: "Repositories" },
];

export const Filter = ({ filterData }: any) => {
  const [state, dispatch] = useReducer(reducer, {
    searchQuery: "",
    selectedOption: options[0],
    animatedClass: "align-items-center",
  });

  const onValueChangeHandler = (value: string) => {
    const option = options.find((o) => o.value === value);
    dispatch({ type: "SELECTED_OPTION", payload: option });
  };

  const handleSearchOnChange = (event: any) => {
    debounceSearchQuery(event);
  };

  const debounceSearchQuery = useCallback(
    debounce((event: any) => {
      dispatch({ type: "SEARCH_QUERY", payload: event.target.value });
    }, 800),
    [],
  );

  useEffect(() => {
    filterData({
      option: state.selectedOption.value,
      search: state.searchQuery,
    });
  }, [state.searchQuery, state.selectedOption]);

  return (
    <section className={`${classes[state.animatedClass]} ${classes.container}`}>
      <div>
        <Header />
        <div className={classes.controls}>
          <Input
            type="string"
            placeholder="start typing to search ..."
            onChange={handleSearchOnChange}
          />

          <Select
            options={options}
            defaultValue={state.selectedOption.value}
            onValueChange={onValueChangeHandler}
          ></Select>
        </div>
      </div>
    </section>
  );
};
