// @ts-nocheck
import * as React from "react";
import {
  useForm,
  Controller,
  ControllerProps,
  Control,
  FieldPath,
} from "react-hook-form";

type FormValues = {
  number: number;
  number1: number;
  test: number;
};

const NumberInput = (arg: Omit<ControllerProps<FormValues>, "render">) => (
  <Controller
    {...arg}
    render={({ field }) => (
      <input
        {...field}
        onChange={(e) =>
          field.onChange(
            Number.isNaN(parseFloat(e.target.value))
              ? 0
              : parseFloat(e.target.value)
          )
        }
      />
    )}
  />
);

const ControllerPlus = <TInput extends string, TOutput>({
  control,
  transform,
  name,
  defaultValue,
}: {
  transform: {
    input: (value: TOutput) => TInput;
    output: (value: React.ChangeEvent<HTMLInputElement>) => TOutput;
  };
  name: FieldPath<FormValues>;
  control: Control<FormValues>;
  defaultValue?: TInput;
}) => (
  <Controller
    defaultValue={defaultValue}
    control={control}
    name={name}
    render={({ field }) => (
      <input
        {...field}
        placeholder="number"
        onChange={(e) => field.onChange(transform.output(e))}
        value={transform.input(field.value)}
      />
    )}
  />
);

function Transform() {
  const { handleSubmit, control, register, setValue } = useForm<FormValues>({
    defaultValues: {
      number: 0,
    },
  });
  const onSubmit = (data: FormValues) => console.log(data);

  React.useEffect(() => {
    register("test");
  }, [register]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="register"
        onChange={(e) => setValue("test", parseInt(e.target.value))}
      />
      <NumberInput control={control} name="number" />

      <ControllerPlus<string, number>
        transform={{
          input: (value) =>
            isNaN(value) || value === 0 ? "" : value.toString(),
          output: (e) => {
            const output = parseInt(e.target.value, 10);
            return isNaN(output) ? 0 : output;
          },
        }}
        control={control}
        name="number1"
        defaultValue=""
      />

      <input type="submit" />
    </form>
  );
}

export default Transform;
