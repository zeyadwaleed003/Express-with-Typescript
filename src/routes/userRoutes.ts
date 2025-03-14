import { Router } from 'express';
import { createUser, getUser, getUsers } from '../controllers/userController';

const router = Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUser);

export default router;
