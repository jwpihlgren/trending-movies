import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function TrendingNavBar(props){
    return(
    <Menu inverted>
        <Menu.Item as={Link} to={props.path}>
            TrendingMovies
        </Menu.Item>
    </Menu>
    )
}

export default TrendingNavBar;