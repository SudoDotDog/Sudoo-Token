/**
 * @author WMXPY
 * @namespace Token
 * @description Creator
 * @package Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { generateKeyPair, KeyPair, SignatureCreator } from "../../src";

describe('Given {SignatureCreator} class', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('token-creator');

    it('should be able to construct', (): void => {

        const keyPair: KeyPair = generateKeyPair();

        const creator: SignatureCreator = SignatureCreator.instantiate(keyPair.private);

        expect(creator).to.be.instanceOf(SignatureCreator);
    });
});
