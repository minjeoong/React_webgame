const path = require('path');

module.exports = {

    name : 'wordrelay-setting',
    mode : 'development',
    devtool : 'eval', //빠르게 하겠다.
    resolve : {
        extensions : ['.js', '.jsx' ]
    },

    entry : {  // 입력
        app: ['./client' ],
    },
    module :{
        rules:[{
                // js 나 jsx 파일에 loader 를 적용 => 최신 문법을 옛 브라우저에 호환되도록
                test: /\.jsx?/,
                loader  : 'babel-loader',
                // presets-env, presets-react 적용
                options : {
                    presets : ['@babel/env', '@babel/react'],
                },
        }],
    },
    output: { // 출력 
        path: path.join(__dirname, 'dist'), // 현재 폴더 안에 있는 dist 라는 뜻
        filename : 'app.js', 
    },
 };