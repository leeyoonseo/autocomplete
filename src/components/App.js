import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import List from './List';
import './App.css';

class App extends Component {

  state = {
    keyWord : '',
    list : [
      '가나다라마',
      '나다라마바',
      '다라마바사',
      '사이렌',
      '모든 날, 모든 순간',
      '북극성',
      '뚜두뚜두',
      '여보세요',
      '열애중',
      '여행',
      '너나 해',
      '지나오다',
      '한',
      '셋 셀테니',
      '몰랐니',
      '데리러 가',
      '너만 괜찮다면',
      '밤편지',
      '전하지 못한 진심',
      '뿜뿜',
      '브람스 자장가',
      'abcdef',
      'ABC마트'
    ]
  }

  handleChange = (e) => {
    this.setState({
      keyWord : e.target.value
    });
  }

  handleOnClick = () => {

  }

  render() {
    const {list, keyWord} = this.state;
    
    return (
      <div className="app">
        <Input onChange={this.handleChange}/>
        <Button />
        <List list={list} keyWord={keyWord}/>
      </div>
    );
  }
}

export default App;
