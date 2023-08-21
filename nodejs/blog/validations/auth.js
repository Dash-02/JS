import { body } from 'express-validator'

export const registerValidation = [
    body('email', 'Invalid email format').isEmail(),
    body('password', 'Password must contain at least 5 characters').isLength({ min: 5 }),
    body('fullName', 'Enter a name').isLength({ min: 3 }),
    body('avatarUrl', 'Invalid avatar link').optional().isURL(),
]