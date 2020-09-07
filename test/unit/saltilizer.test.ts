/**
 * @author WMXPY
 * @namespace Token
 * @description Saltilizer
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { Saltilizer } from '../../src';

describe('Given {Saltilizer} class', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('token-saltilizer');

    it('should be able to construct', (): void => {

        const salt: string = chance.string();

        const saltilizer: Saltilizer = Saltilizer.create(salt);

        expect(saltilizer).to.be.instanceOf(Saltilizer);
    });
});
