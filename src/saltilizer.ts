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

    private _appendStart: boolean;
    private _appendEnd: boolean;

    private constructor(salt: string) {

        this._salt = salt;

        this._appendStart = false;
        this._appendEnd = true;
    }

    public enableAppendStart(): this {

        this._appendStart = true;
        return this;
    }

    public disableAppendStart(): this {

        this._appendStart = false;
        return this;
    }

    public enableAppendEnd(): this {

        this._appendEnd = true;
        return this;
    }

    public disableAppendEnd(): this {

        this._appendEnd = false;
        return this;
    }

    public encrypt(content: string) {

        const combinedContent: string = content + this._salt;
    }

    public combine(content: string) {


    }

    private getStartContent(): string {

        if (this._appendStart) {
            return this._salt;
        }
        return '';
    }

    private getEndContent(): string {

        if (this._appendEnd) {
            return this._salt;
        }
        return '';
    }
}
