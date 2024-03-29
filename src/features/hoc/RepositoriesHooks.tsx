import React from "react";
import useDataFetching from "../../app/global/useDataFetching";

function RepositoriesHooks() {
  const { loading, results, error } = useDataFetching(
    "https://api.github.com/users/knight3001/repos"
  );

  if (loading || error) {
    return loading ? <span>Loading...</span> : <span>{error}</span>;
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

export default RepositoriesHooks;
