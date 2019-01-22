import {connect} from 'react-redux';
import {getVisivleTodos} from "../utility/getVisibleTodos";
import {toggleTodo} from "../actions";
import TodoList from "../components/TodoList";

const mapStateToProps = state => ({
    todos: getVisivleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);