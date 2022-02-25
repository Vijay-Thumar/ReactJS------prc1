import './MainContainer.css';
import React, { useState, useEffect } from 'react';
import HeaderUser from './HeaderUser';
import User from './User';
import UserProfile from './UserProfile'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

function MainContainer() {
    const profileVisibility = useSelector(state => state.profile.IsMouseEntred);
    const [profile, setProfile] = useState({}); // Complex data on weekend
    const [isLoading, setIsLoading] = useState(false);
    const [userList, setUserList] = useState([]);
    let myList = [];

    const callApi = (url) => {
        fetch(url)
            .then((data) => {
                return data.json();
            })
            .then((res) => {
                myList = res.data;
                myList.map((item) => {
                    item.user_status = "Offline";
                    item.user_access = "User";
                    item.uisowner = false;
                    return item;
                });
                setUserList(myList);
                setIsLoading(true)
                console.log(myList);
            });
    }

    const page1 = () => {
        setIsLoading(true);
        callApi('https://reqres.in/api/users?page=1');
        setIsLoading(false);
    }

    const page2 = () => {
        callApi('https://reqres.in/api/users?page=2');
    }

    useEffect(() => {
        callApi('https://reqres.in/api/users?page=1');
    }, []);

    const mouseEnterHandler = (data) => {
        setProfile(data);
    };

    return (
        <React.Fragment>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
            <div className='MainContainer'>
                <div>
                    <HeaderUser />

                    {!isLoading && <span>Loading...</span>}
                    {isLoading &&
                        userList.map((user) => {
                            return <User onHover={mouseEnterHandler}
                                ukey={user.id}
                                userFirstName={user.first_name}
                                userLastName={user.last_name}
                                uemail={user.email}
                                user_avatar={user.avatar}
                                ustatus={(user.id === 1 || user.id === 7) ? user.user_status = "Online" : user.user_status}
                                uaccess={(user.id === 1 || user.id === 7) ? user.user_access = 'Admin' : user.user_access}
                                uisowner={(user.id === 1 || user.id === 7) ? user.uisowner = true : user.uisowner}
                            />
                        })
                    }
                    <div className='pages'>
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item" onClick={page1}><button class="page-link">1</button></li>
                                <li class="page-item" onClick={page2}><button class="page-link">2</button></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='User_Profile'>
                    {profileVisibility && <UserProfile data={profile} />}
                </div>
            </div>
        </React.Fragment>
    )
}

export default MainContainer