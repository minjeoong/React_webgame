const React = require('react'); // 분리해 줄때 쓰이는 얘를 꼭 불러와야 함. 
const { Component } = React;

class WordRelay extends React.Component {
    state = {
        text: 'Hello, webpack',
    };

    render(){
        return <h1>{this.state.text}</h1>
        
    }
}


module.exports = WordRelay;