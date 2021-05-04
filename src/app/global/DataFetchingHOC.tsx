import React from "react";

const DataFetchingHOC = (props) => (WrappedComponent) => {
  class WithDataFetching extends React.Component {
    constructor() {
      super();
      this.state = {
        results: [],
        loading: true,
        error: "",
      };
    }

    async componentDidMount() {
      this.fetchData();
    }

    async fetchData() {
      try {
        const data = await fetch(props.dataSource);
        const json = await data.json();

        if (json) {
          this.setState({
            results: json,
            loading: false,
          });
        }
      } catch (error) {
        this.setState({
          loading: false,
          error: error.message,
        });
      }
    }

    render() {
      const { results, loading, error } = this.state;

      return (
        <WrappedComponent
          results={results}
          loading={loading}
          error={error}
          {...this.props}
        />
      );
    }
  }

  WithDataFetching.displayName = `WithDataFetching(${WrappedComponent.name})`;

  return WithDataFetching;
};

export default DataFetchingHOC;
