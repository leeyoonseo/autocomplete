import React, {Component} from 'react';
import './List.css';

class List extends Component{
    shouldComponentUpdate(nextProps, nextState){
        return this.props.keyWord !== nextProps.keyWord;
    }

    matchKeyWords(){
        const {list, keyWord} = this.props;
        const removeSpaceKeyWord = normalizeWord(keyWord);

        if(this.isEmptyKeyWord(keyWord)) return []

        return list
            .map(word =>  normalizeWord(word).startsWith(removeSpaceKeyWord) && <li key={word} className="list-item"><a href="#" title={word}>{word}</a></li>)
    }

    isEmptyKeyWord(keyWord){
        return keyWord === ''
    }

    render(){
        let className = 'list';
        if(this.isEmptyKeyWord()) className += ' list--hide';

        return <ul className={className} ref={ref => {this.list = ref;}}>{this.matchKeyWords()}</ul>;
    }
}

export default List;

function removeSpace(str) {
    return str.replace( /(\s*)/g, "");
}

function normalizeWord(word) {
    return removeSpace(word).toLowerCase()
}