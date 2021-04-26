import { Request, Response, NextFunction } from 'express';
import { Err } from './interfaces';

export const wrap = (fn: any) => (req: Request, res: Response, next: NextFunction) => fn(req, res, next).catch(next);

export function error(status: number, message: string, data?: any): Error {
    const err = new Error(message) as Err;
    err.status = status;
    err.data = data;
    return err;
}
