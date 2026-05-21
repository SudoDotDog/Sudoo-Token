/**
 * @author WMXPY
 * @namespace Token
 * @description Serialize
 */

export const serializeString = (before: string): string => {

    const buffer: Buffer = Buffer.from(before);
    const base64: string = buffer.toString('base64');

    return base64
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
};

export const deserializeString = (before: string): string => {

    const standard: string = before
        .replace(/-/g, '+')
        .replace(/_/g, '/');
    const buffer: Buffer = Buffer.from(standard, 'base64');

    return buffer.toString('utf8');
};

export const serializeObject = (before: any): string => {

    const stringified: string = JSON.stringify(before);

    return serializeString(stringified);
};

export const deserializeObject = <T = unknown>(before: string): T => {

    const deserialized: string = deserializeString(before);

    return JSON.parse(deserialized);
};
