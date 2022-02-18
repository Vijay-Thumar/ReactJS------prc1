import React, { useState } from 'react';
import './MainContainer.css';
import Dateoftodo from './Dateoftodo';
import NewTodo from './NewTodo/NewTodo';
import UserTodo from './UserTodo';

function MainContainer(props) {

    { localStorage.getItem("todos") || localStorage.setItem("todos", JSON.stringify([])) }

    const todolists = [
        {
            key: 1,
            description: 'Buy new sweatshirt',
            isComplete: false
        },
        {

            key: 2,
            description: 'Bring promotional phase',
            isComplete: false
        }
    ];


    const [list, setList] = useState(JSON.parse(localStorage.getItem("todos")));
    const [showForm, setShowForm] = useState(false);

    const addTodoHandler = () => { };

    const datahandler = (data) => {
        const newTodos = [data, ...list];
        setList(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos))
        setShowForm(false);
    }

    const showFormHandler = () => {
        setShowForm(true);
    };

    const cancelHandler = (value) => {
        setShowForm(value);
        console.log("cancelHandler");
    };

    return (
        <div className='maincontainer'>

            <Dateoftodo />
            <div>
                {localStorage.getItem("todos") &&
                    list.map((item) => {
                        return <UserTodo isChecked={item.isComplete} key={item.key} task={item.description} onComplition={addTodoHandler} />
                    })
                }
            </div>
            {showForm && 

            <NewTodo onAddTodo={datahandler} cancelHandler={cancelHandler} />

            }

            {!showForm &&

                <div className='btn_div' onClick={showFormHandler}>
                    <button className='btn'>+</button>
                </div>
            }

        </div>

    );
}

export default MainContainer;