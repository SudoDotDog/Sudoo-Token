/**
 * @author WMXPY
 * @namespace Token
 * @description Generate
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { generateKeyPair, KeyPair, generateSingleLineKeyPair } from '../../src';

describe('Given [Generate] help methods', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('token-generate');

    it('should be able to generate a key', (): void => {

        const keyPair: KeyPair = generateKeyPair();

        expect(keyPair.public).to.be.include('END PUBLIC KEY');
        expect(keyPair.private).to.be.include('END PRIVATE KEY');
    });

    it('should be able to contain enter', (): void => {

        const keyPair: KeyPair = generateKeyPair();

        expect(keyPair.public).to.be.include('\n');
        expect(keyPair.private).to.be.include('\n');
    });

    it('should be able to generate single line key pair', (): void => {

        const keyPair: KeyPair = generateSingleLineKeyPair();

        expect(keyPair.public).to.be.not.include('\n');
        expect(keyPair.private).to.be.not.include('\n');

        expect(keyPair.public).to.be.include('||');
        expect(keyPair.private).to.be.include('||');
    });
});
