import React, {Component} from 'react';
import './Button.css';
class Button extends Component{
    render(){
        const {onClick} = this.props;

        return(
            <button 
                className="Button" 
                type="button"
                onClick={onClick}
            >검색</button>
        );
    }
}

export default Button;