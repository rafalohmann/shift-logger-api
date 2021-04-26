import { Router, Request, Response } from 'express';
import { Log } from '../models';
import { wrap, error, validateQuery } from '../utils';

const router = Router();
const debug = require('debug')('ts-express:log.controller');

router.get(
    '/',
    validateQuery({ page: 'required', pageSize: 'required' }),
    wrap(async (req: Request, res: Response) => {
        debug('[GET] /log', req.query);

        const { page, pageSize } = req.query;

        try {
            const { models: data, pagination } = await (new Log() as any).fetchPage({
                page,
                pageSize,
            });
            res.json({
                data,
                pagination,
            });
        } catch (e) {
            throw error(500, 'Database Error');
        }
    }),
);

module.exports = router;
