import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import "./App.css";

function Home(){
  return <h2>Halaman Home</h2>
}
function ListView(){
  return <h2>Halaman Users</h2>
}
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">User</Link></li>
          </nav>

          <main>
            <Route path="/" exact component={Home} />
            <Route path="/users" exact component={ListView} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
