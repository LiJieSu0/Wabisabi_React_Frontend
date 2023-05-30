import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';

export function TodoList(props){
    TodoList.propTypes={
        todos:PropTypes.arrayOf(PropTypes.object),
        toggleTodo:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired
    }

    const todos=props.todos;
    const toggleTodo=props.toggleTodo;
    const deleteTodo=props.deleteTodo;
    return(
    <ul className='todo-list'>
    {todos.length===0 && "No Todo"}
    {todos.map(todo=>{
        return(
            <TodoItem todo={todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        );
    })}
    </ul>
    );

}