import React from 'react';
import PropTypes from 'prop-types';
import  Layouts  from './../../components/Layouts/index';
import { Jumbotron } from 'react-bootstrap';

Home.propTypes = {
    
};

function Home(props) {
    return (
        <Layouts>
            <Jumbotron style={{margin : '5rem' , background:'#fff' }} className="text-center">
                <h1>Admin Dashboard</h1>
            </Jumbotron>
        </Layouts>
    );
}

export default Home;