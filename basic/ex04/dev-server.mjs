/**
 *  개발 서버 구성 
 */

import http from 'http';
import express from "express";
import path from 'path';

//const __dirname = path.resolve(); => 디렉터리 명을 알려줌.
const port = 7000;

// Application Setup *******************
const application = express().use(express.static(path.join(path.resolve('.'), "public")))
// Server setup ************************
http
  .createServer(application)
  .on("listening", function () {
    console.info(`Http Server running on port ${port}`);
  })
  .listen(port);
