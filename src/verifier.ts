/**
 * @author WMXPY
 * @namespace Token
 * @description Verifier
 */

import { createVerify, Verify } from 'crypto';

export class SignatureVerifier {

    public static create(publicKey: string): SignatureVerifier {

        return new SignatureVerifier(publicKey);
    }

    private readonly _publicKey: string;

    private constructor(publicKey: string) {

        this._publicKey = publicKey;
    }

    public verify(content: string, signature: string): boolean {

        const verify: Verify = createVerify('RSA-SHA256');
        verify.update(content);
        const result: boolean = verify.verify(this._publicKey, signature, 'base64');

        return result;
    }
}
