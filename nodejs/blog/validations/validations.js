import { body } from 'express-validator';

export const loginValidation = [
    body('email', 'Invalid email format').isEmail(),
    body('password', 'Password must contain at least 5 characters').isLength({
        min: 5
    })
];

export const registerValidation = [
    body('email', 'Invalid email format').isEmail(),
    body('password', 'Password must contain at least 5 characters').isLength({
        min: 5
    }),
    body('fullName', 'Enter a name').isLength({ min: 3 }),
    body('avatarUrl', 'Invalid avatar link').optional().isURL()
];

export const postCreateValidation = [
    body('title', 'Введите заголовок статьи').isLength({ min: 3 }).isString(),
    body('text', 'Введите текст статьи').isLength({ min: 3 }).isString(),
    body('tags', 'Неверный формат тэгов').optional().isArray(),
    body('imageUrl', 'Неверная ссылка на изображение').optional().isString()
];
