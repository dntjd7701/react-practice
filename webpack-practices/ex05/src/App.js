import './assets/scss/App.scss';

const App = function(){
    const app = document.createElement('h1');
    app.className = 'Header';
    app.textContent = '오.....webpack 좋다... 개발 환경으로 딱인데';
    return app;
}

export { App };

