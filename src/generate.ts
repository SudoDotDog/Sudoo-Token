/**
 * @author WMXPY
 * @namespace Token
 * @description Generate
 */

import { generateKeyPairSync, KeyPairSyncResult } from 'crypto';
import { KeyPair } from './declare';

export const convertKeyPairToSingleLine = (pair: KeyPair): KeyPair => {

    return {
        public: pair.public.replace(/\n/g, '||'),
        private: pair.private.replace(/\n/g, '||'),
    };
};

export const convertKeyPairToMultiLine = (pair: KeyPair): KeyPair => {

    return {
        public: pair.public.replace(/\|\|/g, '\n'),
        private: pair.private.replace(/\|\|/g, '\n'),
    };
};

export const generateKeyPair = (): KeyPair => {

    const result: KeyPairSyncResult<string, string> = generateKeyPairSync(
        'rsa',
        {
            modulusLength: 2048,
            publicExponent: 0x10001,
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem',
            },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'pem',
            },
        },
    );

    return {
        public: result.publicKey,
        private: result.privateKey,
    };
};

export const generateSingleLineKeyPair = (): KeyPair => {

    const keyPair: KeyPair = generateKeyPair();
    return convertKeyPairToSingleLine(keyPair);
};
