import React, {Component} from 'react';
import './Button.css';
class Button extends Component{
    render(){
        return(
            <button 
                className="Button" 
                type="button"
            >검색</button>
        );
    }
}

export default Button;