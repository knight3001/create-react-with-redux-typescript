import React from "react";
import { useForm, NestedValue } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

type Option = {
  label: string;
  value: string;
};

type FormValues = {
  autocomplete: NestedValue<Option[]>;
  select: NestedValue<number[]>;
};

const Options = [
  { label: "Chocolate", value: "chocolate" },
  { label: "Strawberry", value: "strawberry" },
  { label: "Vanilla", value: "vanilla" },
];

function TypedForm() {
  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      autocomplete: [{ label: "Chocolate", value: "chocolate" }],
      select: [10],
    },
  });

  const select = watch("select");

  const onSubmit = handleSubmit((data) => alert(JSON.stringify(data, null)));

  React.useEffect(() => {
    register("autocomplete", {
      validate: (value) => value.length || "This is required.",
    });
    register("select", {
      validate: (value) => value.length || "This is required.",
    });
  }, [register]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <section>
          <label>MUI Autocomplete</label>
          <Autocomplete
            multiple
            options={Options}
            getOptionLabel={(option: Option) => option.label}
            onChange={(e, options) => setValue("autocomplete", options)}
            renderInput={(params) => (
              <TextField
                {...params}
                error={Boolean(errors?.autocomplete)}
                helperText={errors?.autocomplete?.message}
              />
            )}
          />
        </section>

        <section>
          <label>MUI Select</label>
          <FormControl>
            <Select
              multiple
              value={select}
              onChange={(e) => setValue("select", e.target.value as number[])}
              error={Boolean(errors?.select)}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormHelperText error={Boolean(errors?.select)}>
              {errors?.select?.message}
            </FormHelperText>
          </FormControl>
        </section>

        <input type="submit" />
      </form>
    </>
  );
}

export default TypedForm;
