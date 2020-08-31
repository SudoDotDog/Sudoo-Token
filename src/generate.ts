/**
 * @author WMXPY
 * @namespace Token
 * @description Generate
 */

import { generateKeyPairSync, KeyPairSyncResult } from 'crypto';
import { KeyPair } from './declare';

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
