/**
 * @author WMXPY
 * @namespace Token
 * @description Generate
 */

import { generateKeyPairSync, KeyPairSyncResult } from 'crypto';
import { KeyPair } from './declare';

export const convertKeyToSingleLine = (key: string): string => {

    return key.replace(/\n/g, '||');
};

export const convertKeyToMultiLine = (key: string): string => {

    return key.replace(/\|\|/g, '\n');
};

export const convertKeyPairToSingleLine = (pair: KeyPair): KeyPair => {

    return {
        public: convertKeyToSingleLine(pair.public),
        private: convertKeyToSingleLine(pair.private),
    };
};

export const convertKeyPairToMultiLine = (pair: KeyPair): KeyPair => {

    return {
        public: convertKeyToMultiLine(pair.public),
        private: convertKeyToMultiLine(pair.private),
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
