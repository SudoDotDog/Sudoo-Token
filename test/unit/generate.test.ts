/**
 * @author WMXPY
 * @namespace Token
 * @description Generate
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { generateKeyPair, KeyPair } from '../../src';

describe('Given [Generate] help methods', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('token-generate');

    it('should be able to generate a key', (): void => {

        const keyPair: KeyPair = generateKeyPair();

        expect(keyPair.public).to.be.include('END PUBLIC KEY');
        expect(keyPair.private).to.be.include('END PRIVATE KEY');
    });
});
