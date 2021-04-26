import { Router } from 'express';

const router = Router();

router.use('/', require('./controllers/home'));
router.use('/log', require('./controllers/log'));

module.exports = router;
