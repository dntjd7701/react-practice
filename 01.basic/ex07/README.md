## ex07: CRA 로 만든 Application 직접 설정해서 만들어 보기

1.  프로젝트 생성
    ```bash
    $ mkdir ex07
    $ cd ex07
    $ npm init -y
    $ npm i -D webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react css-loader style-loader sass-loader node-sass file-loader
    $ npm i react react-dom
    ```
2.  프로젝트 디렉토리
    <pre>
      /ex07
        |--- package.json
        |--- package-lock.json
        |--- node-modules
        |--- public
        |--- src
        |--- webpack.config.js
        |--- babel.config.json
    <pre>

3.  scripts
    "scripts": {
      "debug": "npx webpack serve --progress --mode development",
      "build": "npx webpack --mode production"
    }

4.  빌드(번들링)
    ```bash
    $ npm run build
    ```

5.  test(개발 서버 실행)
    ```bash
    $ npm start
    ```


6. [webpack.config.js]
```javascript
const path = require('path');

module.exports = {
    mode: 'none',
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module: {
        rules:[{
            test: /\.css$/i,
            use:['style-loader', {loader:'css-loader', options: {modules: true}}]
        }, {
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(svg|jpe?g|gif|png|tiff?|bmp|ico|)$/i,
            loader: 'file-loader',
            options: {
                outputPath: '/assets/images',
                name: '[name].[ext]'
            }
        }, {
            test: /\.js$/i,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    devtool: "eval-source-map",
    devServer: {
        contentBase: path.resolve('public'),
        watchContentBase: true,
        host: "0.0.0.0",
        port: 9999,
        inline: true,
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }
}
```