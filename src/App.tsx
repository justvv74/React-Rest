import React, { useEffect, useState } from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReduser } from "./store/store";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { RoutesList } from "./shared/RoutesList";

const store = createStore(
  rootReduser,
  composeWithDevTools(applyMiddleware(thunk))
);

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  return (
    <Provider store={store}>
      {mounted && (
        <BrowserRouter>
          {/* <Layout> */}
          <RoutesList />
          {/* </Layout> */}
        </BrowserRouter>
      )}
    </Provider>
  );
}

export default App;
