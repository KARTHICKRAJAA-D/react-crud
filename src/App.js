import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Adduser } from './componenets/adduser';
import { BaseApp } from './componenets/base';
import { data } from './componenets/data';
import { Edit } from './componenets/edituser';
import { Nopage } from './componenets/nopage';
import { Students } from './componenets/students';
import { View } from './componenets/viewdetails';

function App() {
  const [user,setUser] = useState(data)
  return (
   <Switch>
 <Route exact path='/'>
  <BaseApp />
 </Route>

 <Route path='/students'>
 <Students
  user={user} 
  setUser={setUser}/>
 </Route>

<Route path = '/adduser'>
  <Adduser
  user={user} 
  setUser={setUser}/>
</Route>

<Route path='/view/:id'>
<View
user={user}/>
</Route>

<Route path='/edit/:id'>
  <Edit
  user={user} 
  setUser={setUser}/>
</Route>
    
     <Route path='**'>
     
      <Nopage/>
      </Route>


   </Switch>
  );
}

export default App;


