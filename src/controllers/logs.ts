import { Router, Request, Response } from 'express';
import { query, param, body, validationResult, CustomValidator } from 'express-validator';
import { Log } from '../models';
import { wrap, error } from '../utils';

const moment = require('moment');

const router = Router();
const debug = require('debug')('ts-express:log.controller');

const isDateTime: CustomValidator = (value) => {
    const date = moment(value);
    return date.isValid();
};

router.get(
    '/',
    query('page').notEmpty().isInt({ min: 1 }),
    query('pageSize').notEmpty().isInt({ min: 1 }),
    wrap(async (req: Request, res: Response) => {
        debug('[GET] /logs', req.query);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const { page, pageSize } = req.query;

        try {
            const { models: data, pagination } = await (new Log() as any).orderBy('-event_date').fetchPage({
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

router.get(
    '/:id',
    param('id').notEmpty().isInt({ min: 1 }),
    wrap(async (req: Request, res: Response) => {
        debug('[GET] /logs/:id', req.params);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const { id } = req.params;

        try {
            const log = await new Log().where({ id }).fetch();
            return res.json(log);
        } catch (e) {
            throw error(500, 'Database Error');
        }
    }),
);

router.post(
    '/',
    body('status').notEmpty().isBoolean(),
    body('event_date').notEmpty().custom(isDateTime),
    body('area').notEmpty().isIn(['control_room', 'factory_floor', 'expedition']),
    body('machine').optional({ nullable: true }).isString().isLength({ max: 255 }),
    body('operator').notEmpty().isString().isLength({ max: 255 }),
    body('comment').notEmpty().isString().isLength({ max: 65535 }),
    wrap(async (req: Request, res: Response) => {
        debug('[POST] /logs', req.body);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        try {
            const { event_date: eventDate } = req.body;

            const log = await new Log().save({
                ...req.body,
                event_date: moment(eventDate).format('YYYY-MM-DD HH:mm:ss'),
            });
            return res.json(log);
        } catch (e) {
            throw error(500, 'Database Error');
        }
    }),
);

router.put(
    '/:id',
    param('id').notEmpty().isInt({ min: 1 }),
    body('status').notEmpty().isBoolean(),
    body('event_date').notEmpty().custom(isDateTime),
    body('area').notEmpty().isIn(['control_room', 'factory_floor', 'expedition']),
    body('machine').optional({ nullable: true }).isString().isLength({ max: 255 }),
    body('operator').notEmpty().isString().isLength({ max: 255 }),
    body('comment').notEmpty().isString().isLength({ max: 65535 }),
    wrap(async (req: Request, res: Response) => {
        debug('[PUT] /logs/:id', req.body);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const { id } = req.params;
        const { status, event_date: eventDate, area, machine, operator, comment } = req.body;

        try {
            const log = await new Log().where({ id }).fetch();
            if (log) {
                log.set('status', status);
                log.set('event_date', moment(eventDate).format('YYYY-MM-DD HH:mm:ss'));
                log.set('area', area);
                log.set('machine', machine);
                log.set('operator', operator);
                log.set('comment', comment);
                const updatedlog = await log.save();
                return res.json(updatedlog);
            }
            throw error(404, 'Not Found');
        } catch (e) {
            if (e.data) throw e;
            throw error(500, 'Database Error');
        }
    }),
);

router.delete(
    '/:id',
    param('id').notEmpty().isInt({ min: 1 }),
    wrap(async (req: Request, res: Response) => {
        debug('[DELETE] /logs/:id', req.body);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const { id } = req.params;

        try {
            const log = await new Log().where({ id }).fetch();
            if (log) {
                await log.destroy();
                return res.sendStatus(200);
            }
            throw error(404, 'Not Found');
        } catch (e) {
            if (e.data) throw e;
            throw error(500, 'Database Error');
        }
    }),
);

module.exports = router;
