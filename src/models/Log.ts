/* eslint-disable */
import db from '../db';

export class Log extends db.Model<Log> {
    get tableName() {
        return 'log';
    }
}
