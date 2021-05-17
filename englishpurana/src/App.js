import Login from "./components/login";
import Button from "react-bootstrap/Button";
// import Text from 'react-text';
import Main from "./components/main.js"
import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  console.log(store.getState())
  return (
      <Provider store={store}>
    <div className="App">
      <Main />
    </div>
      </Provider>
  );
}


export default App;
