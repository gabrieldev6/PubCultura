export default class Err {
    err: boolean;
    status: string;

    constructor(err: boolean, status: string){
        this.err = err;
        this.status = status;
    }
} 