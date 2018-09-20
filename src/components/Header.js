import React from 'react';
import {NavLink} from 'react-router-dom';
import {startLogout} from '../actions/auth';
import { connect } from 'react-redux';

export const Header = ({startLogout}) => (
    <header>
        <h1>Expensify</h1>
        <p><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></p>
        <p><NavLink to="create" activeClassName="is-active">Create Expense</NavLink></p>
        <button onClick={startLogout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);