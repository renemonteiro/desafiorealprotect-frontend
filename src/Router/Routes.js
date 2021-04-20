import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Forms from '../Page/Forms';
import Home from '../Page/Home'



export default function Routes() {
  return (
   <BrowserRouter>
   <Switch>
       <Route exact path ='/'>
           <Home/>
       </Route>
       <Route exact path ='/form'>
           <Forms/>
       </Route>
       <Route>
           <p>Erro 404</p>
       </Route>
   </Switch>
   </BrowserRouter>
  );
}

