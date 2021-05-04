import React, { useState, useEffect } from "react";

function useDataFetching(dataSource) {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(dataSource);
        const json = await data.json();

        if (json) {
          setLoading(false);
          setResults(json);
        }
      } catch (errors) {
        setLoading(false);
        setError(errors.message);
      }

      setLoading(false);
    }

    fetchData();
  }, [dataSource]);

  return {
    loading,
    results,
    error,
  };
}

export default useDataFetching;
