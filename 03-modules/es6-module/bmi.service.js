const escale = 1;

export class BMIService{
    static getIndex(weight, height) {
        return weight / (height * height);
    }
}

export const gender = 'unknown';