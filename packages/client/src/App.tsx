import { sharedFunction } from "packages/shared/src/utils";
import React from "react";

const App = () => {
  sharedFunction();
  return <h1>Hello world!</h1>;
};

export default App;
