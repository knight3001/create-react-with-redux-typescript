import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";

interface IFormInput {
  firstName: string;
  lastName: string;
  iceCreamType: { label: string; value: string };
}

function ReactHookForm() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            id="filled-basic"
            label="Filled"
            variant="filled"
            {...field}
          />
        )}
      />
      {errors.firstName && "First name is required"}
      <Controller
        name="iceCreamType"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
          />
        )}
      />
      <input type="submit" />
    </form>
  );
}

export default ReactHookForm;
