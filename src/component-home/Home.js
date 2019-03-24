import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './Navbar';
import './home.css';

const Dashboard = () => <h2>Dashboard</h2>
const Contact = () => <h2>Contact</h2>

const Home = () => {
    return (
            <div>
                <BrowserRouter>
                    <div>
                        <Navbar />
                        <Route exact path="/" component={Contact} />
                        <Route path="/surveys" component={Dashboard} />
                    </div>
                </BrowserRouter>
                Hi There!
            </div>
        )
}

export default Home;
