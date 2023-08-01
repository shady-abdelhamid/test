import classes from "./Input.module.css";

type inputConfig = {
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const Input: React.FC<inputConfig> = ({
  type,
  placeholder,
  onChange,
}) => {
  return (
    <div className={classes.input}>
      <input placeholder={placeholder} onChange={onChange} type={type} />
    </div>
  );
};
