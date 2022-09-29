import Item from "../src/Itens";
import { Beer, Cigar, Eletronics, Water } from "../src/Itens/ItemTypes";
import Order from "./../src/Order";
import TaxItem from "./../src/TaxItem";

test("Deve criar um pedido e calcular o total", () => {
  const order = new Order();
  order.addItem(new Beer({description:"Brahma", price: 6}));
  order.addItem(new Cigar({description:"Malboro", price: 10}));
  order.addItem(new Eletronics({description:"IPhone 13", price: 13000}));
  order.addItem(new Water({description:"Crystal", price: 1}));
  const total = order.total;
  expect(total).toBe(13017);
});

test("Deve criar um pedido e calcular os impostos", () => {
  const order = new Order();
  order.addItem(new Beer({description:"Brahma", price: 6}));
  order.addItem(new Cigar({description:"Malboro", price: 10}));
  order.addItem(new Eletronics({description:"IPhone 13", price: 13000}));
  order.addItem(new Water({description:"Crystal", price: 1}));
  const taxes = order.taxes;
  expect(taxes).toBe(3903.7);
});
