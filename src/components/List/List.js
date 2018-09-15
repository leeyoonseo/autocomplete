import React, {Component} from 'react';
import './List.css';

const getNewList = (newList,list, keyWord) => {
    list.findIndex(items => {
        const item = items.toLowerCase(); 
        const removeSpaceItem = item.replace( /(\s*)/g, "");
        const removeSpaceKeyWord = keyWord.replace( /(\s*)/g, "");

        if(removeSpaceItem.indexOf(removeSpaceKeyWord.toLowerCase()) == 0){
            newList.push(item);
        }
    });
}

class List extends Component{
    shouldComponentUpdate(nextProps, nextState){
        if(this.props.keyWord !== nextProps.keyWord){
            return true;
        }
        return false;
    }

    render(){
        const {list, keyWord} = this.props;
        const newList = [];
        getNewList(newList, list, keyWord);

        return(
            <ul className="list">
                {
                    keyWord !== '' 
                        ?   newList.map((val,index) => {
                                return(<li key={index}>{val}</li>)
                            })
                        :   []
                         
                }
            </ul>
        );
    }
}

export default List;