// webconfig의 설정을 통해 모듈로 사용하고 있지 않다.
import './assets/scss/App.scss'; 
import logo from './assets/images/logo.svg';

const App = function(){
    const app = document.createElement('div');
    app.className = 'App';
    app.innerHTML = 
    `<header class='App-header'>
        <img src="${logo}" class='App-logo' alt="logo">
        <p>Hello World</p>
    </headder>`;
    return app;
}

export { App };

