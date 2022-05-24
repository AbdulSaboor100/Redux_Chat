import React from "react";
import { BugAdded, BugRemoved, BugResolved } from "./redux/actions/actions";
import store from "./redux/store/store";

const App = () => {
  store.subscribe(() => console.log("Store Status", store.getState()));

  function bugAddFunc() {
    store.dispatch(BugAdded("Shaarif me khere hain bohot"));
  }

  function bugRemoveunc() {
    store.dispatch(BugRemoved(1));
  }

  function bugResolvedFunc() {
    store.dispatch(BugResolved(3))
  }

  return (
    <div>
      hello world
      <button onClick={bugAddFunc}>Bug Add</button>
      <button onClick={bugRemoveunc}>Bug Remove</button>
      <button onClick={bugResolvedFunc}>Bug Resolve</button>
    </div>
  );
};

export default App;
