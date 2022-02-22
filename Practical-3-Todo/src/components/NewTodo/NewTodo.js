import './NewTodo.css'
import TodoForm from './TodoForm';

function NewTodo(props){

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
       }
       return result;
    }

    const saveTodoDataHandler = (enteredTodoData) => {
        // if(!enteredTodoData.text || /^\s*$/.test(enteredTodoData.text)){
        //     return};

        const todoData ={
            key: makeid(8),
            description: enteredTodoData,
            isComplete: false
        };

        props.onAddTodo(todoData);
    };

    const cancelHandler  = (value) => {
        props.cancelHandler(value);
    };

    return (
        <div className='new_todo'>
            <TodoForm onSaveTodoData={saveTodoDataHandler} onCancelHandler={cancelHandler}/>
        </div>
    );
};

export default NewTodo;