import * as React from "react";
import { useGetAllPokemonQuery } from "../../services/pokemon";

function PostsList() {
  const { data } = useGetAllPokemonQuery();

  return (
    <ul>
      {data?.results?.map((item) => (
        <PostById key={item.name} name={item.name} />
      ))}
    </ul>
  );
}

function PostById({ name }: { name: string }) {
  // Will select the post with the given id, and will only rerender if the given posts data changes
  const { post } = useGetAllPokemonQuery(undefined, {
    selectFromResult: ({ data }) => ({
      post: data?.results?.find((x) => x.name === name),
    }),
  });

  return <li>{post?.name}</li>;
}

export default PostsList;
