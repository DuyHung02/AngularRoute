export class Product {
  id! : number;
  name! : String;
  image! : String;
  price! : number;

  constructor(id: number, name: String, image: String, price: number) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
  }
}
