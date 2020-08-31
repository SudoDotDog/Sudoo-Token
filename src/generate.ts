/**
 * @author WMXPY
 * @namespace Token
 * @description Generate
 */

import { generateKeyPairSync } from 'crypto';
import { KeyPair } from './declare';

export const generateKey = (): KeyPair => {

    const result = generateKeyPairSync('rsa', {
        modulusLength: 2048,
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem',
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
        },
    } as any);

    return {
        public: result.publicKey,
        private: result.privateKey,
    };
};
