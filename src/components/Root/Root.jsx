import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Root = props => {
    return (
        <div>
           <Navbar></Navbar>
           <Outlet></Outlet>
        </div>
    );
};

Root.propTypes = {
    
};

export default Root;