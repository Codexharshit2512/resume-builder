import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import AppRouter from "./router/AppRouter";
import AppLoading from "./components/AppLoading";
import AuthModalWrapper from "./context/authModalContext";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store/store";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppLoading>
          <Router>
            <AuthModalWrapper>
              <div className="App">
                <AppRouter />
              </div>
            </AuthModalWrapper>
          </Router>
        </AppLoading>
      </PersistGate>
    </Provider>
  );
}

export default App;
