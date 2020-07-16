import "react-native-gesture-handler";
import * as React from "react";
import Index from "./src/index";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./Redux/Reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}
export default App;
