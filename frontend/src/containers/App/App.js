import { BrowserRouter as Router } from "react-router-dom";
import MainRoute from "router";
import { store, persistor } from "providers/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@mui/material/styles";
import { HelmetProvider } from "react-helmet-async";
import manAppTheme from "theme";
import MainContainer from "components/MainContainer";
import history from "providers/history";
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HelmetProvider>
          <ThemeProvider theme={manAppTheme}>
            <Router history={history}>
              <MainContainer>
                <MainRoute />
              </MainContainer>
            </Router>
          </ThemeProvider>
        </HelmetProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
