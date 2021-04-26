import { Router, Request, Response } from 'express';
import { query, validationResult } from 'express-validator';
import { Log } from '../models';
import { wrap, error } from '../utils';

const router = Router();
const debug = require('debug')('ts-express:log.controller');

router.get(
    '/',
    query('page').not().isEmpty().isInt({ min: 1 }),
    query('pageSize').not().isEmpty().isInt({ min: 1 }),
    wrap(async (req: Request, res: Response) => {
        debug('[GET] /log', req.query);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const { page, pageSize } = req.query;

        try {
            const { models: data, pagination } = await (new Log() as any).fetchPage({
                page,
                pageSize,
            });
            return res.json({
                data,
                pagination,
            });
        } catch (e) {
            throw error(500, 'Database Error');
        }
    }),
);

module.exports = router;
