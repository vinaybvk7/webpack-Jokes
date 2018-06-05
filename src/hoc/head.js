import React from 'react';
import {Link} from 'react-router';

const head = props => {

    const { route } = props;
    return (
        <header className="App-header">
        	<ul className="options">
        		<Link to="/" className={ route === '/' ? "option-item active-option" : "option-item" }>
        			<span className="color-white">Read New Jokes </span>

        			</Link>
        		<Link to="/summary" className={ route !== '/' ? "option-item active-option" : "option-item"}>
        			<span className="color-white">
        				Summary
        			</span>
        		</Link>
        	</ul>
        </header>
    );

};

export default head;
