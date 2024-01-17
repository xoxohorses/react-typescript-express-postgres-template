import React from "react";

import { sharedFunction } from "../../shared/utils";

const App = () => {
  sharedFunction("client");
  return <h1 className="text-red-500">Hello world!</h1>;
};

export default App;
