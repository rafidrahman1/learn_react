import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store/store";
import MyApp from "./components/home/HeroSection";

const AppContent = () => {

  return (
    <Routes>
      <Route path="/" element={<MyApp />} />
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




