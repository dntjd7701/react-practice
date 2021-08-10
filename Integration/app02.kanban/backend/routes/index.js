const models = require('../models/kanban');
// Routers
const errorRouter = require('./error');
const auth = require("./auth");

// Logging
const applicationRouter = {
    setup : async function(application){
        // request router 추가로 더하기
        application 
        .all("*", function (req, res, next) {
          res.locals.req = req; //locals는 꼬옥 잇어 
          res.locals.res = res;
          next();
        })
        .use("/api", require("./kanban"))
        .use(errorRouter.error404)
        .use(errorRouter.error500);
    }
}
module.exports = { applicationRouter };