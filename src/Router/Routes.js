
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../Page/Home'



export default function Routes() {
  return (
   <BrowserRouter>
   <Switch>
       <Route exact path ='/'>
           <Home/>
       </Route>
       <Route>
           <p>Erro 404</p>
       </Route>
   </Switch>
   </BrowserRouter>
  );
}

