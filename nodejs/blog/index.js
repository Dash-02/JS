import express from 'express';
import mongoose from 'mongoose';

import {
    registerValidation,
    loginValidation
} from './validations/validations.js';

import checkAuth from './utils/checkAuth.js';

import * as UserController from './controllers/UserController.js';
import * as PostController from './controllers/PostController.js';

mongoose
    .connect(
        'mongodb+srv://user-blog:user0987@cluster0.eljscjc.mongodb.net/blog?retryWrites=true&w=majority'
    )
    .then(() => console.log('DB connected'))
    .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());

app.post('/auth/login', loginValidation, UserController.login);
app.post('/auth/register', registerValidation, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

app.get('/posts', PostController.getAll);
app.get('/posts/:id', PostController.getAll);
app.get('/posts', checkAuth, UserController.getMe);
app.get('/posts', checkAuth, UserController.getMe);
app.get('/posts', checkAuth, UserController.getMe);

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server OK');
});
