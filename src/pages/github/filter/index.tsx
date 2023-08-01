import { Fragment, useState } from "react";
import { Input } from "../../../components/UI/Input/input";
import { Header } from "../header";
import { DropDown } from "../../../components/UI/dropdown";
import classes from "./filter.module.css";
import { Select, Option } from "../../../components/UI/select";

export const Filter = () => {
  const options: Option[] = [
    { value: "users", label: "Users" },
    { value: "repositories", label: "Repositories" },
  ];

  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);
  console.log('selectedOption', selectedOption);

  const onValueChangeHandler = (value: string) => {
      const option = options.find(o => o.value === value) || selectedOption;
      setSelectedOption(option);
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
      />

      <Select options={options} defaultValue={selectedOption.value} onValueChange={onValueChangeHandler}></Select>
      </div>
    </Fragment>
  );
};
