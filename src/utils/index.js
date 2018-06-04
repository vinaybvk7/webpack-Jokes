import fetch from 'fetch';

const utils = {
    showJoke : (text)=>{
        return fetch.get('https://icanhazdadjoke.com/',
        	{
        		headers:{
        			Accept: "application/json"
        		}
        	}
        );
    }
}

export default utils;
