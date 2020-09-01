/**
 * @author WMXPY
 * @namespace Token
 * @description Creator
 */

import { createSign, Signer } from 'crypto';
import { attemptConvertKeyToMultiLine } from './generate';

export class SignatureCreator {

    public static create(privateKey: string): SignatureCreator {

        const ensuredPrivateKey: string = attemptConvertKeyToMultiLine(privateKey);
        return new SignatureCreator(ensuredPrivateKey);
    }

    private readonly _privateKey: string;

    private constructor(privateKey: string) {

        this._privateKey = privateKey;
    }

    public sign(content: string): string {

        const signer: Signer = createSign('RSA-SHA256');
        signer.update(content);
        const signature: string = signer.sign(this._privateKey, 'base64').replace(/=/g, '');

        return signature;
    }

    public signWebFriendly(content: string): string {

        const signature: string = this.sign(content);
        return signature.replace(/\+/g, '-').replace(/\//g, '_');
    }
}
