const Pizza = () => {
  return React.createElement('div',{}, [
    React.createElement('h2',{},"Pizza"),
    React.createElement('p',{},"Margarita"),

 ] );
}
const App = () => {
  return React.createElement('div',{},
    [
      React.createElement('h1',{},"Padre Ginos's"),
      React.createElement(Pizza),
      React.createElement(Pizza),
      React.createElement(Pizza),
      React.createElement(Pizza),
      React.createElement(Pizza),

    ]


  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));