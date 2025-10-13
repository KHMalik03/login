exports.checkUserForm = async (req, res, next) => {
    
    console.log(req.body)
    const schema = {
        email : Joi.string().email().required(),
        password : Joi.string().min(3).max(30).required()
    };

    const validation = schema.validate(req.body);

    if (!validation) {
        next();
    }
    else{
        res.status(422).json(validation.message)
    }

};