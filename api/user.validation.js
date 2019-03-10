const Joi = require('joi-add')();
const { ValidationSchema, RequestValidation } = require('request-validation');

const schema = new ValidationSchema({
    body: {
        username: Joi.string()
            .min(4).max(16)
            .add((it) => it.regex(/^[a-zA-Z0-9_]+$/),
                'Username should only contain letters, numbers, and underscores (_).')
            .addLabel('Username'),
        password: Joi.string()
            .min(8).max(20)
            .add((it) => it.regex(/^[a-zA-Z0-9_]+$/),
                'Password should only contain letters, numbers, and underscores (_).')
            .addLabel('Password'),
        email: Joi.string()
            .email()
            .addLabel('Email')
    },
    params: {
        id: Joi.number().integer().options({ convert: true })
    }
});

module.exports = new RequestValidation({
    create: schema
        .useBody('username', 'password', 'email')
        .presence('required'),
    login: schema
        .useBody('username', 'password')
        .presence('required'),
    show: schema
        .useParams('id')
        .presence('required'),
    update: schema.use({
        body: ['username', 'password', 'email'],
        params: 'id'
    }),
    patch: schema.use({
        body: ['username', 'password', 'email'],
        params: 'id'
    })
});