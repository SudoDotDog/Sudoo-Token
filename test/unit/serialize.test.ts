/**
 * @author WMXPY
 * @namespace Token
 * @description Serialize
 * @package Unit Test
 */

import { expect } from "chai";
import {
    deserializeObject,
    deserializeString,
    serializeObject,
    serializeString,
} from "../../src/serialize";

describe('Given [Serialize] help methods', (): void => {

    // UTF-8 'ÿ' is 0xC3 0xBF — repeating it surfaces bit patterns that map to
    // '+' and '/' under standard base64.
    const trigger: string = 'ÿÿÿÿÿÿÿÿÿÿÿÿ';
    const base64UrlAlphabet: RegExp = /^[A-Za-z0-9_-]+$/;

    it('should emit base64url alphabet for strings', (): void => {

        const encoded: string = serializeString(trigger);

        expect(encoded).to.match(base64UrlAlphabet);
    });

    it('should emit base64url alphabet for objects', (): void => {

        const encoded: string = serializeObject({ k: trigger });

        expect(encoded).to.match(base64UrlAlphabet);
    });

    it('should round-trip strings with high-bit bytes', (): void => {

        const encoded: string = serializeString(trigger);
        const decoded: string = deserializeString(encoded);

        expect(decoded).to.be.equal(trigger);
    });

    it('should still decode legacy standard-base64 inputs (back-compat)', (): void => {

        const legacy: string = Buffer.from(trigger).toString('base64');
        expect(legacy).to.match(/[+/=]/);

        const decoded: string = deserializeString(legacy);

        expect(decoded).to.be.equal(trigger);
    });

    it('should produce output readable by Node base64url decoder', (): void => {

        const encoded: string = serializeString(trigger);
        const decoded: string = Buffer.from(encoded, 'base64url').toString('utf8');

        expect(decoded).to.be.equal(trigger);
    });

    it('should round-trip objects via serializeObject/deserializeObject', (): void => {

        const source: Record<string, string> = { k: trigger };
        const encoded: string = serializeObject(source);
        const decoded: Record<string, string> = deserializeObject(encoded);

        expect(decoded).to.deep.equal(source);
    });
});
