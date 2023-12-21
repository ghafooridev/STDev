import { TextField } from "@mui/material";
import React from "react";

interface TextInputProps {
  label: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  multiline?: boolean;
  select?: boolean;
  options?: { id: string; name: string }[];
}
const TextInput = (props: TextInputProps) => {
  const {
    label,
    type,
    onChange,
    name,
    error,
    multiline,
    select,
    options,
    value,
  } = props;

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (typeof onChange === "function") onChange(e);
  };
  return (
    <TextField
      label={label}
      variant="outlined"
      style={{ width: "100%", borderRadius: 10 }}
      onChange={onChangeInput}
      value={value}
      name={name}
      error={!!error}
      helperText={error}
      type={type ?? "text"}
      multiline={multiline}
      select={select}
      SelectProps={{
        native: true,
      }}
    >
      {select &&
        options?.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
    </TextField>
  );
};

export default TextInput;
