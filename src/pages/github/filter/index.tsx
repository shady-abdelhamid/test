import { Fragment, useState } from "react";
import { Input } from "../../../components/UI/Input/input";
import { Header } from "../header";
import classes from "./filter.module.css";
import { Select, Option } from "../../../components/UI/select";

export const Filter = ({ filterData } : any) => {
  const options: Option[] = [
    { value: "users", label: "Users" },
    { value: "repositories", label: "Repositories" },
  ];


  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const onValueChangeHandler = (value: string) => {
    const option = options.find((o) => o.value === value);
    setSelectedOption(option!);
    filterData({option:selectedOption, searchQuery:searchQuery})
  };

  const handleSearchOnChange = (e : any) =>{
    setSearchQuery( e.target.value)
    filterData({option:selectedOption, searchQuery: e.target.value})
  }
  return (
    <Fragment>
      <Header />
      <div className={classes.container}>
        <Input
          input={{
            id: "amount_" + 1,
            type: "string",
            placeholder: "start typing to search ...",
          }}
          onChange={handleSearchOnChange}
        />

        <Select
          options={options}
          defaultValue={selectedOption.value}
          onValueChange={onValueChangeHandler}
        ></Select>
      </div>
    </Fragment>
  );
};
