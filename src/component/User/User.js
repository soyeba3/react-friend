import React from 'react';
import './User.css'

const User = (props) => {
    const {name, picture, gender, email, phone, Salary} = props.user;
    const handleAddFriend = props.handleAddFriend;
    // console.log(props.user)
    
    return (
        <div className='user-div'>
            <div className='picture-div'>
                <img src={picture.large} alt="" />
            </div>
            <div className='detail-div'>
                <h3>{name.title} {name.first} {name.last}</h3>
                <p>Gender : {gender}</p>
                <p>E-mail : {email}</p>
                <p>Phone : {phone}</p>
                <p>Monthly Income : {Salary}</p>
                <button onClick={() => handleAddFriend(props.user)} className='add-btn'>Add Friend</button>
            </div>
        </div>
    );
};

export default User;