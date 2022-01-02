import { useEffect, useState } from 'react';
import './App.css';
import Cart from './component/Cart/Cart';
import User from './component/User/User';
import data from './data/data.json';

function App() {
  const userData = data.results;
  const [user, setUser] = useState([])
  const [friend, setFriend] = useState([])
  useEffect(()=>{

      setUser(userData)
  },[]);

  const handleAddFriend = (user) => {
      const newFriend = [...friend, user]
      setFriend(newFriend)
  };
  
  return (
    <div className='main-div'>
        <Cart friend={friend}></Cart>
        {user.map(user => <User user={user} handleAddFriend={handleAddFriend} key={user.phone}></User>)}
    </div>
  );
}

export default App;
