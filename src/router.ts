import { Router } from 'express';

const router = Router();

router.use('/', require('./controllers/home'));
router.use('/api/logs', require('./controllers/logs'));

module.exports = router;
