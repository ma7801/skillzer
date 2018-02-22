import { Injectable } from '@angular/core';

@Injectable()
export class AppSettings {
    secondsPerProblem: number;
    maxCards: number;
    starWidth: number;

    constructor() {
        this.secondsPerProblem = 4;
        this.maxCards = 50;
        this.starWidth = 50;
    }
}
