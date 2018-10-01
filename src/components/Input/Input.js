import React, {Component} from 'react';
import './Input.css';

class Input extends Component{

    componentDidMount(){
        this.searchInput.focus();
    }

    render(){
        const {onChange, onKeyDown} = this.props;
        return(
            <input
                className="input" 
                type="text" 
                placeholder="검색어를 입력하세요." 
                ref={ref => { this.searchInput = ref; }}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        );
    }
}

export default Input;