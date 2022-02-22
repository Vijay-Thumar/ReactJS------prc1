import React from "react";
import "./Dateoftodo.css";

function Dateoftodo(){
    const date = new Date();

    const month = date.toLocaleString('en-US', {month: 'long'});
    const day = date.toLocaleString('en-US', {day: '2-digit'});
    const year = date.getFullYear();
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });

    return(
        <React.Fragment>
            <div className='todo_date'>
                <span>
                <span className="date">{day}</span>
                    <div className="month_year">
                        <span>{month}</span><br/>
                        <span>{year}</span>
                    </div> 
                </span>                           
                <span className="weekday">{weekday.toUpperCase()}</span> 
            </div>
        </React.Fragment>
    );
}
export default Dateoftodo;