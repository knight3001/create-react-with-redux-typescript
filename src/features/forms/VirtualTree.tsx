import React, { CSSProperties } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { VariableSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import "../../styles/tree.css";

interface WindowedRowProps {
  index: number;
  style: CSSProperties;
  data: { title: string }[];
}

const items = Array.from(Array(1000).keys()).map((i) => ({
  title: `List ${i}`,
  quantity: Math.floor(Math.random() * 10),
}));

// In a bigger project, this would be a seperate component.
const WindowedRow = React.memo<WindowedRowProps>(({ index, style, data }) => {
  const { register } = useFormContext();
  const qtyKey = `${index}.quantity`;

  return (
    <div style={style}>
      <label>{data[index].title}</label>
      <input {...register(qtyKey)} />
    </div>
  );
});

const VitualTree = () => {
  const onSubmit = (data: { title: string }[]) => {
    console.log(data);
  };

  const formMethods = useForm({
    defaultValues: items,
  });

  return (
    <div className="container">
      <h1>Using with React-window</h1>
      <p>Rather than register fields, we use getValues and setValue.</p>

      <form className="form" onSubmit={formMethods.handleSubmit(onSubmit)}>
        <div className="wrapper">
          <FormProvider {...formMethods}>
            <AutoSizer>
              {({ height, width }) => (
                <List
                  height={height}
                  itemCount={items.length}
                  itemSize={() => 100}
                  width={width}
                  itemData={items}
                >
                  {WindowedRow}
                </List>
              )}
            </AutoSizer>
          </FormProvider>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VitualTree;
