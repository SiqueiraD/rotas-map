import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import MapComponent from "./Map"
import { Link } from 'react-router-dom'

class App extends React.Component {
    
    render() {
        return (
            <div className='App container'>
                <div className="NavBar">
                    <Link to="/">History</Link>
                    <Link to="/Map">Map</Link>
                </div>
            
                <Switch>
                
                    {/* <Route path="/map" render={(props) => {
                        return <MapComponent  />
                    }} /> */}
                    <Route path="/map" component={MapComponent} />

                    <Route path="/" component={Home} />
                
                </Switch>
            </div>
            )
        }
    }
    
    export default App