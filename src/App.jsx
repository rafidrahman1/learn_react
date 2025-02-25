import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store/store";
import LoginButton from "./components/buttons/LoginButton";

const AppContent = () => {
  return (
    <Routes>
      <Route path="/" element={
        <div>
          <h1>My App</h1>
          <LoginButton />
        </div>
      } />
    </Routes>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
};

export default App;
