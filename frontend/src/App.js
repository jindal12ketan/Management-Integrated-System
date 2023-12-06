import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoute from "./router";
import { store, persistor } from "providers/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { HelmetProvider } from "react-helmet-async";
import history from "providers/history";
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HelmetProvider>
          <Router history={history}>
            <MainRoute />
          </Router>
        </HelmetProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
