import {Product} from "../../model/Product";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    new Product(1, "Người yêu Bách", "https://i.pinimg.com/564x/eb/9b/e6/eb9be6b28c25f8a787bfeffcef1bca54.jpg", 250),
    new Product(2, "Người yêu Hùng", "https://i.pinimg.com/564x/42/52/8b/42528b4b058573049c776dd70051c70d.jpg", 500),
    new Product(3, "Sản phẩm khuyến mãi", "https://i.pinimg.com/564x/0f/0a/5f/0f0a5f0a00695953822d2d03b9382f94.jpg", 0)
  ]

  constructor() {
  }

  // findById(id: number): Product | undefined {
  //   return this.products.find(p => p.id = id);
  // }

  findProductById(id : number) : Product | undefined {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return this.products[i];
      }
    }
    return undefined;
  }

  findIndexById(id: number) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id)
        return i;
    }
    return -1;
  }
}
