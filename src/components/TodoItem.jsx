import PropTypes from 'prop-types';

export function TodoItem(props){
    TodoItem.propTypes={
        todo:PropTypes.object.isRequired,
        toggleTodo:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired
    }

    const todo=props.todo;
    const toggleTodo=props.toggleTodo;
    const deleteTodo=props.deleteTodo;
        return( 
            <li key={todo.id}>
            <label>
            <input type="checkbox" checked={todo.completed} onChange={e=>toggleTodo(todo.id, e.target.checked)}/>
            {todo.title}
            </label>
            <button className='btn btn-danger' onClick={()=>deleteTodo(todo.id)}>Delete</button>
            </li>
        );

}