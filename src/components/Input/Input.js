import React, {Component} from 'react';
import './Input.css';

class Input extends Component{
    render(){
        const {onChange} = this.props;
        return(
            <input
                className="input" 
                type="text" 
                placeholder="검색어를 입력하세요." 
                onChange={onChange}
            />
        );
    }
}

export default Input;