import React from "react";
import DataFetchingHOC from "../../app/global/DataFetchingHOC";

interface Props {
  loading: boolean;
  results: {
    id: number;
    html_url: string;
    full_name: string;
  }[];
  error: string;
}

function Repositories({ loading, results, error }: Props) {
  if (loading || error) {
    return loading ? "Loading..." : error;
  }

  return (
    <ul>
      {results.map(({ id, html_url, full_name }) => (
        <li key={id}>
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            {full_name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default DataFetchingHOC({
  dataSource: "https://api.github.com/users/knight3001/repos",
})(Repositories);
