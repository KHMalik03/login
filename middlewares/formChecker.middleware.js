const Joi = require('joi');

//middleware to check the form of the user
exports.checkUserForm = (req, res, next) => {
    console.log(req.body);
    
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(3).max(30).required()
    });

    const validation = schema.validate(req.body);

    if (validation.error) {
        res.status(422).json({ 
            message: validation.error.details[0].message 
        });
    } else {
        next();
    }
};