import {Product} from "../../model/Product";
import {Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit{


  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/products');
  }

  findById(id : number): Observable<Product> {
    return this.http.get<Product>('http://localhost:8080/products/' + id)
  }

  create(product : Product): Observable<Product> {
    return this.http.post<Product>('http://localhost:8080/products', product)
  }

  // findProductById(id : number) : Product | undefined {
  //   for (let i = 0; i < this.products.length; i++) {
  //     if (this.products[i].id == id) {
  //       return this.products[i];
  //     }
  //   }
  //   return undefined;
  // }

  // findIndexById(id: number) {
  //   for (let i = 0; i < this.products.length; i++) {
  //     if (this.products[i].id == id)
  //       return i;
  //   }
  //   return -1;
  // }

  ngOnInit(): void {
  }
}
