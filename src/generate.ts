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

export const convertKeyPairToSingleLine = (keyPair: KeyPair): KeyPair => {

    return {
        public: convertKeyToSingleLine(keyPair.public),
        private: convertKeyToSingleLine(keyPair.private),
    };
};

export const convertKeyPairToMultiLine = (keyPair: KeyPair): KeyPair => {

    return {
        public: convertKeyToMultiLine(keyPair.public),
        private: convertKeyToMultiLine(keyPair.private),
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
