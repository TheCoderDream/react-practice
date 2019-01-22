import React, { Component } from 'react';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createStore } from 'redux';
import VisibleTodoList from './container/VisibleTodoList'
import Footer from "./components/Footer";
import AddTodo from "./components/AddTodo";
const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <AddTodo/>
            <VisibleTodoList/>
            <Footer/>
        </Provider>
    );
  }
}

export default App;
