// direct does not require name should be same, can use import expressss from 'express'
import express from 'express'
// within {} name should be same from where we getting those functions
import {signin, signup} from '../controllers/user.js'

const router = express.Router();

router.post('/signin', signin);
router.post('signup', signup);

export default router;