export class Product {
  id! : number;
  name! : String;
  image! : String;
  price! : number;
  status! : String;

  constructor(id: number, name: String, image: String, price: number, status: String) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.status = status;
  }
}
