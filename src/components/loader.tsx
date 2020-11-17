import React from "react";
interface Loader {
  loading: boolean;
}
const Loader = (props: Loader) => {
  return (
    <>
      {props.loading && (
        <div>
          <h3>Loading...</h3>
        </div>
      )}
    </>
  );
};

export default Loader;
