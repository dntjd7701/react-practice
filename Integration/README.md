## React Practices - Integration(개발 환경 통합)



## Configuration
1. Application Structure

<pre>
/app
    |--- /backend
    |        |--- /logging
    |        |        |--- index.js
    |        |--- /routes
    |        |        |--- [index.js]
    |        |        |--- auth.js
    |        |        |--- error.js
    |        |--- /controllers
    |        |--- /models
    |        |--- /views
    |        |        |--- /error
    |        |                |--- [404.ejs]
    |        |                |--- [500.ejs]
    |        |--- /public
    |        |--- [index.js]
    |        |--- [app.config.env]


    |--- /frontend
    |        |--- /config
    |        |        |--- babel.config.json
    |        |        |--- [webpack.config.json]
    |        |--- /public
    |        |        |--- favicon.ico
    |        |        |--- index.html
    |        |--- /assets
    |        |--- /src

    |--- /node_modules
    |--- package.json
    |--- package-lock.json
</pre>

2. nodemon
3. webpack dev server
4. package.json
5. node application


## Application
1. app01.emaillist(fetch, get, 환경설정)
<pre>
- 개발 통합 설정(with Node Backend)
- backend: API server only(Node express 기반)
- frontend: React(SPA)
- AJAX: fetch(ES5) 기반
</pre>

2. app02.kanban(fetch, post)
<pre>
- 개발 통합 설정(with Node Backend)
- backend: API server only(Node express 기반)
- frontend: React(SPA)
- AJAX: fetch(ES5) 기반
</pre>
3. app03.guestbook
4. app04.gallery
5. app05.mysite

