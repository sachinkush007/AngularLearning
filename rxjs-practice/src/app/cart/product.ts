export class Product {
    id!:number;
    url!:string
    name: string;
    price: number;
    quantity: number;
    
  
    constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
      this.quantity = 0;
    }
  }