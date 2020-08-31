/**
 * @author WMXPY
 * @namespace Token
 * @description Serialize
 */

import { createHash, Hash } from 'crypto';

export const md5String = (target: string): string => {

    const hash: Hash = createHash('md5');
    hash.update(target);

    return hash.digest('hex');
};

export const serializeString = (before: string): string => {

    const buffer: Buffer = Buffer.from(before);
    const base64: string = buffer.toString('base64');

    return base64.replace(/=/g, '');
};

export const deserializeString = (before: string): string => {

    const buffer: Buffer = Buffer.from(before, 'base64');
    const content: string = buffer.toString('utf8');

    return content;
};

export const serializeObject = (before: any): string => {

    const stringified: string = JSON.stringify(before);

    return serializeString(stringified);
};

export const deserializeObject = <T extends any = unknown>(before: string): T => {

    const deserialized: string = deserializeString(before);

    return JSON.parse(deserialized);
};
