const App = function(){
    const app = document.createElement('h1');
    app.textContent = 'Hello World';
    return app;
}

// rendering
document.getElementById('root').appendChild(App());