import React, { useState } from 'react';
import User from '../User';
import aucss from '../cssFiles/AllUsers.module.css'
import Header from '../views/Header';

function AllUsers() {

    const allUsers = JSON.parse(localStorage.getItem('users'));
    // eslint-disable-next-line no-unused-vars
    const [allusersIndex, setAllUsersIndex] = useState(allUsers.length);
    // console.log('length of an array: ' ,allUsers.length );

    const runDeleteUser = (snedData) => {
        console.log(snedData);
        let delIndex = allUsers.findIndex(item => item.key === snedData);
        // console.log(typeof (delIndex));
        // console.log(delIndex);
        
        allUsers.splice(delIndex, 1);
        // console.log(allUsers);
        localStorage.setItem('users', JSON.stringify(allUsers));
        setAllUsersIndex(allUsers.length);
    }

    return (
        <div>
            <Header />
            <div className={`${aucss.flex_container}`}>
                {
                    (localStorage.getItem('users') === '[]') ?

                        'no user found from storage'
                        :
                        <div>
                            {
                                localStorage.getItem('users') &&
                                allUsers.map((item) => {
                                    return <User id={item.key} key={item.key} name={item.name} email={item.email} phone={item.phone} onDeleteUser={runDeleteUser} />
                                })
                            }
                        </div>

                }
            </div>
            <button onClick={runDeleteUser}> give delete user</button>
        </div>
    )
}

export default AllUsers