import React from 'react';
import TodoList from './TodoList';
import './MainContainer.css';
import Dateoftodo from './Dateoftodo';

function MainContainer(props){
    return(
        <div className='maincontainer'>
            
            <Dateoftodo />
            <TodoList />
            <div className='btn_div'>
                <button className='btn'>+</button>
            </div>
        </div>
        
    );
}

export default MainContainer;