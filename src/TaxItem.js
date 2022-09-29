
import Item from "./Itens/index.js";

export default class TaxItem extends Item {
    tax = 0;
    constructor(object){
        super(object)
    }

    calculateTax(tax){
        return this.price * tax;
    }

    get tax (){
        return this.tax
    }
}



// [ ]  Crie uma classe `TaxItem` que herda de `Item` e possui um método `calculateTax` que recebe uma taxa de imposto por parâmetro e retorna o imposto calculado do `Item`.
// [ ]  Modifique os testes e a implementação de `Order` para adequar essa nova classe.