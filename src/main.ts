import config from '@mitm/config';
import logger from '@mitm/logger';
import { environment } from '@mitm/node-common';
import * as dfns from 'date-fns';
import 'source-map-support/register.js';
import util from 'util';
import * as winston from 'winston';

environment.loadEnvFile();

logger.default.configure({
    level: config.default.logLevel,
    transports: [
        new winston.transports.Console({
            handleExceptions: true,
            handleRejections: true,
            format: winston.format.combine(
                winston.format.timestamp({
                    format: () => dfns.format(new Date(), 'MM-dd HH:mm:ss')
                }),
                winston.format.colorize(),
                winston.format.errors(),
                winston.format.printf(info => {
                    const splat = (info as unknown as { [symbol: symbol]: unknown })[Symbol.for('splat')];
                    const splatObject = Array.isArray(splat) && splat.length == 1 ? splat[0] : splat;

                    const splatString = splatObject ? ` / ${util.inspect(splatObject, { colors: true, depth: 3 })}` : '';

                    return `${info.timestamp} ${info.level}: ${info.message}${splatString}`;
                }))
        }),
        new winston.transports.File({
            filename: 'logs/errors.log',
            level: 'error',
            handleExceptions: true,
            handleRejections: true
        })
    ]
});

// Need to dynamically import the rest of the app so that the environment variables are loaded before imports from the
// app (that may read env variables as top-level code) are statically resolved.
import('./server.js').then(({ boot }) => boot());
