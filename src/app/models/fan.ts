import { IFan } from './ifan';

export class Fan implements IFan{
    public id: number;
    public firstname: string;
    public lastname: string;
    public birthdate: Date;
    public series: string[];
    
    public get YearsOld() : number{
        let diffMs = Date.now() - this.birthdate.getTime();
        let ageByMs = new Date(diffMs);
        return Math.abs(ageByMs.getUTCFullYear() - 1970);
    }

    constructor(id : number, fn : string, ln : string, bd:Date, ...titles : string[]){
        this.id = id;
        this.firstname = fn;
        this.lastname = ln;
        this.birthdate = bd;
        this.series = [];
        for (const title of titles) {
            this.series.push(title);
        }
    }
}
