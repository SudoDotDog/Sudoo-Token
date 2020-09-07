/**
 * @author WMXPY
 * @namespace Token
 * @description Saltilizer
 */

export class Saltilizer {

    public static create(salt: string): Saltilizer {

        return new Saltilizer(salt);
    }

    private readonly _salt: string;

    private constructor(salt: string) {

        this._salt = salt;
    }
}
