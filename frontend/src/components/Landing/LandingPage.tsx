import * as React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <div>
            <h1>Welcome!</h1>
            <Link to={"/login"}>Login</Link>
            <br />
            <Link to={'/register'}>Register</Link>
        </div>
    )
}