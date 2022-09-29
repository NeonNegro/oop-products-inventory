import TaxItem from "../TaxItem.js";

export class Beer extends TaxItem {
    tax = 0.20;
    constructor(object) {
        super(object)
    }
}

export class Cigar extends TaxItem {
    tax = 0.25;
    constructor(object) {
        super(object)
    }
}

export class Eletronics extends TaxItem {
    tax = 0.3;
    constructor(object) {
        super(object)
    }
}

export class Water extends TaxItem {
    constructor(object) {
        super(object)
    }
}

// [ ]  Modifique os testes e a implementação de `Order` e `TaxItem` para adequar essas novas classes.