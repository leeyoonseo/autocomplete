import React, {Component} from 'react';
import './List.css';

class List extends Component{
    shouldComponentUpdate(nextProps, nextState){
        return this.props.keyWord !== nextProps.keyWord;
    }

    render(){
        const {list, keyWord} = this.props;
        const removeSpace = (item) => {
            return item.replace( /(\s*)/g, "");
        };
        const removeSpaceKeyWord = removeSpace(keyWord);

        return(
            <ul className="list">
                {
                    keyWord !== ''
                    ?   list.filter(item => {
                            item = item.toLowerCase(); 
                            if(removeSpace(item).indexOf(removeSpaceKeyWord.toLowerCase()) === 0){
                                return item;
                            }
                        })
                    : []
                }
            </ul>
        );
    }
}

export default List;