const model = require('../models/kanban');


module.exports = {
    readAllCards: async function(req, res, next) {
        try {
            const results = await model.findAllCards();
            res.status(200)
                .send({
                    result: 'success',
                    data: results,
                    message:null
                });
        } catch (error) {
            next(error);
        }
    },
    insertTask: function(req,res,next){
    }
}