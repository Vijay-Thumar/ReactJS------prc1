import './MainContainer.css'
import React, { useState } from 'react'
import HeaderUser from './HeaderUser'
import User from './User'
import UserProfile from './UserProfile'

function MainContainer() {
    const Users_List = [
        {
            key: 1,
            UserProfile: 'img',
            UserName: 'Vijay Thumar',
            UserEmail: 'vijay_thumar@yopmail.com',
            UserStatus: 'Online',
            UserAccess: 'Admin',
            isOwner: true
        },
        {
            key: 2,
            UserProfile: 'img',
            UserName: 'Maria Drako',
            UserEmail: 'Maria_Drako@yopmail.com',
            UserStatus: 'Online',
            UserAccess: 'user',
            isOwner: false
        },
        {
            key: 3,
            UserProfile: 'img',
            UserName: 'Cassandra granger',
            UserEmail: 'Cassandra_granger@yopmail.com',
            UserStatus: 'Offline',
            UserAccess: 'user',
            isOwner: false
        },
        {
            key: 4,
            UserProfile: 'img',
            UserName: 'Riya makhani',
            UserEmail: 'Riya_makhani@yopmail.com',
            UserStatus: 'Offline',
            UserAccess: 'user',
            isOwner: false
        },
        {
            key: 5,
            UserProfile: 'img',
            UserName: 'Mitesh donga',
            UserEmail: 'Mitesh_donga@yopmail.com',
            UserStatus: 'Offline',
            UserAccess: 'user',
            isOwner: false
        },
        {
            key: 6,
            UserProfile: 'img',
            UserName: 'Rajesh koothrappali',
            UserEmail: 'Rajesh_koothrappali@yopmail.com',
            UserStatus: 'Offline',
            UserAccess: 'user',
            isOwner: false
        },
    ]

    const [profile, setProfile] = useState({});

    const mouseEnterHandler = (data) => {
        setProfile(data);
    };

    return (
        <React.Fragment>
            <div className='MainContainer'>
                <div>
                    <HeaderUser />
                    {
                        Users_List.map((user) => {
                            return <User onHover={mouseEnterHandler}
                                Ukey={user.key}
                                Uprofile={user.UserProfile}
                                Uname={user.UserName}
                                Ustatus={user.UserStatus}
                                Uaccess={user.UserAccess}
                                Uisowner={user.isOwner}
                                Uemail={user.UserEmail}
                            // userData = {Users_List}
                            />
                        })
                    }
                </div>
                <div className='User_Profile'>
                    {profile.IsMouseEntred && <UserProfile data={profile} />}
                </div>
            </div>
        </React.Fragment>
    )
}

export default MainContainer