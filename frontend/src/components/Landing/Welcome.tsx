import * as React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

export default function Welcome() {
    return (
        <div className="container-full">

            <div className="row">

                <div className="col-lg-12 text-center v-center">
                    <h3>Realtime Task Manager</h3>
                    <Link to="/register" className="lead">Create Account</Link>
                    <br />
                    <Link to="/login" className="lead">Login</Link>
                    <br />
                </div>

            </div>
        </div>
    )
}