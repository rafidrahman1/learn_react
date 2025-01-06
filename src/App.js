const Pizza = (props) => {
  return React.createElement('div',{}, [
    React.createElement('h2',{}, props.name),
    React.createElement('p',{}, props.description),

 ] );
}
const App = () => {
  return React.createElement('div',{},
    [
      React.createElement('h1',{},"Padre Ginos's"),
      React.createElement(Pizza, {
        name: "Margherita",
        description: "Tomato, mozzarella, basil, olive oil"
      }),
      React.createElement(Pizza, {
        name: "Pepperoni",
        description: "Tomato, mozzarella, pepperoni"
      }),
      React.createElement(Pizza, {
        name: "Hawaiian",
        description: "Tomato, mozzarella, ham, pineapple"
      }),
      React.createElement(Pizza, {
        name: "Meat Feast",
        description: "Tomato, mozzarella, ham, pepperoni, sausage, bacon"
      }),
      React.createElement(Pizza, {
        name: "Veggie",
        description: "Tomato, mozzarella, peppers, onions, mushrooms, sweetcorn"
      }),

    ]


  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));