import "react-native-gesture-handler";
import * as React from "react";
import Index from "./src/index";
import { createStore } from "redux";

reducer = () => {};
const store = createStore(reducer);
class App extends React.Component {
  render() {
    return <Index />;
  }
}
export default App;
