import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Navbar } from './components/navbar.js';
import ProductsBody from './components/productsbody.js';
import Login from './components/login.js';
import { Profile } from './components/profile.js'
import ProtectedRoute from './utils/protectedroute.js';
function App() {
  return (

    <div className="App">
      <div className="window">

        <Navbar />

        {/* <ProductsBody /> */}
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/all"
            render={(props) => (
              <ProductsBody {...props} equipment_type={'all'} />
            )}
          />
          <Route path="/computers"
            render={(props) => (
              <ProductsBody {...props} equipment_type={'computers'} />
            )}
          />
          <Route path="/phones"
            render={(props) => (
              <ProductsBody {...props} equipment_type={'phones'} />
            )}
          />
          <Route path="/kitchen"
            render={(props) => (
              <ProductsBody {...props} equipment_type={'kitchen'} />
            )}
          />
          <Route path="/videogames"
            render={(props) => (
              <ProductsBody {...props} equipment_type={'videogames'} />
            )}
          />
          <Route path="/toys"
            render={(props) => (
              <ProductsBody {...props} equipment_type={'toys'} />
            )}
          />

          <ProtectedRoute path='/profile' component={Profile} />
        </Switch>

      </div>
    </div>
  );
}

export default App;
