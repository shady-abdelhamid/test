import { Fragment, useReducer, useState } from "react";
import { Input } from "../../../components/UI/Input/input";
import { Header } from "../header";
import classes from "./filter.module.css";
import { Select, Option } from "../../../components/UI/select";

const reducer = (state: any, action: { type: any; payload: any }) => {
  switch (action.type) {
    case "setSearchQuery":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "setSelectedOption":
      return {
        ...state,
        selectedOption: action.payload,
      };
    default:
      return state;
  }
};

export const Filter = ({ filterData }: any) => {
  const options: Option[] = [
    { value: "users", label: "Users" },
    { value: "repositories", label: "Repositories" },
  ];

  const [state, dispatch] = useReducer(reducer, {
    searchQuery: "",
    selectedOption: options[0],
  });

  // const [selectedOption, setSelectedOption] = useState<Option>(options[0]);
  // const [searchQuery, setSearchQuery] = useState<string>("");

  const onValueChangeHandler = (value: string) => {
    const option = options.find((o) => o.value === value);
    dispatch({ type: "setSelectedOption", payload: option });
  };

  const handleSearchOnChange = (event: any) => {
    console.log("handleSearchOnChange");
    // dispatch({ type: "setSearchQuery", payload: event.target.value });
    // filterData({
    //   option: state.selectedOption.value,
    //   searchQuery: state.searchQuery.value,
    // });
  };
  return (
    <Fragment>
      <Header />
      <div className={classes.container}>
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
    </Fragment>
  );
};
