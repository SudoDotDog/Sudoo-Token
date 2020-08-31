/**
 * @author WMXPY
 * @namespace Token
 * @description Crypto
 */

import { generateKeyPairSync } from 'crypto';

export type KeyPair = {

    readonly public: string;
    readonly private: string;
};

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
