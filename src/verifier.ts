/**
 * @author WMXPY
 * @namespace Token
 * @description Verifier
 */

import { createVerify, Verify } from 'crypto';
import { attemptConvertKeyToMultiLine } from './generate';

export class SignatureVerifier {

    public static instantiate(publicKey: string): SignatureVerifier {

        const ensuredPublicKey: string = attemptConvertKeyToMultiLine(publicKey);
        return new SignatureVerifier(ensuredPublicKey);
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
