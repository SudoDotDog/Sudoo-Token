/**
 * @author WMXPY
 * @namespace Token
 * @description Creator
 */

import { createSign, Sign } from 'crypto';
import { attemptConvertKeyToMultiLine } from './generate';

export class SignatureCreator {

    public static instantiate(privateKey: string): SignatureCreator {

        const ensuredPrivateKey: string = attemptConvertKeyToMultiLine(privateKey);
        return new SignatureCreator(ensuredPrivateKey);
    }

    private readonly _privateKey: string;

    private constructor(privateKey: string) {

        this._privateKey = privateKey;
    }

    public sign(content: string): string {

        const signer: Sign = createSign('RSA-SHA256');
        signer.update(content);
        const signature: string = signer.sign(this._privateKey, 'base64').replace(/=/g, '');

        return signature.replace(/\+/g, '-').replace(/\//g, '_');
    }
}
