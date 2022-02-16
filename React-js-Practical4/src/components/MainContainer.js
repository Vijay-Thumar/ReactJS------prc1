import React, { useState } from 'react';
import './MainContainer.css';
import Dateoftodo from './Dateoftodo';
import NewTodo from './NewTodo/NewTodo';
import UserTodo from './UserTodo';

function MainContainer(props){


    const todolists = [
        {
          key: 1,
          description: 'Buy new sweatshirt',
          isComplete:false
        },
        {
    
          key:2,
          description: 'Bring promotional phase',
          isComplete:false
        },
        {
          key:3,
          description: 'Read an artical',
          isComplete:false
        },
        {
          key:4,
          description: 'Try not to fall asleep',
          isComplete:false
        },
        {
          key:5,
          description: 'Watch\'Sherlock\' ',
          isComplete:false
        },
        {
          key:6,
          description: 'Bring QA for the product',
          isComplete:false
        },
        {
          key:7,
          description: 'Go for a Walk',
          isComplete:false
        }
    ];


    const[list, setList] = useState(todolists);

        const addTodoHandler = () => {};

        const datahandler = (data) => {
            console.log(data);
            const newTodos = [data, ...list];
            // todolists.push(data);
            setList(newTodos);
            console.log(newTodos);
        }

    return(
        <div className='maincontainer'>
            
            <Dateoftodo />
            <div>
                { 
                list.map((item) => {
                return <UserTodo isChecked={item.isComplete} key={item.key} task={item.description}/>
                }) 
                }
            </div>
            <NewTodo onAddTodo={datahandler}/>
            <div className='btn_div'>
                <button className='btn'>+</button>
            </div>
        </div>
        
    );
}

export default MainContainer;