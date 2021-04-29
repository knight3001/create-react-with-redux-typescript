import React from "react";
import Select from "react-select";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import StyledTextField from "../../app/components/StyledTextField";

interface IFormInput {
  firstName: string;
  lastName: string;
  iceCreamType: { label: string; value: string };
}

const schema = yup.object().shape({
  firstName: yup.string().required().min(4),
  age: yup.number().positive().integer().required().min(10),
});

function ReactHookForm() {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <>
      <DevTool control={control} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <StyledTextField
              name="filled-basic"
              label="Filled"
              isRequired
              isInvalid
              onEnter={() => console.log("blur")}
              helper="2323 232 323"
              rows={4}
              width="300px"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
              {...field}
            />
          )}
        />
        <p>{errors.firstName?.message}</p>
        <input {...register("age")} />
        <p>{errors.age?.message}</p>
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
    </>
  );
}

export default ReactHookForm;
