/**
 * @author WMXPY
 * @namespace Token
 * @description Creator
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { generateKeyPair, SignatureCreator } from '../../src';
import { KeyPair } from '../../src/declare';

describe('Given {SignatureCreator} class', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('token-creator');

    it('should be able to construct', (): void => {

        const keyPair: KeyPair = generateKeyPair();

        const creator: SignatureCreator = SignatureCreator.create(keyPair.private);

        expect(creator).to.be.instanceOf(SignatureCreator);
    });
});
