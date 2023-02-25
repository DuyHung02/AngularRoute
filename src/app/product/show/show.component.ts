import {Component, OnInit} from '@angular/core';
import {Product} from "../../../model/Product";
import {ProductService} from "../../service/ProductService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent{

  products : Product[] = [];

  constructor(private productService: ProductService, private http: HttpClient) {
    this.findAll();
  }

  findAll() {
    this.productService.findAll().subscribe(data => {
      this.products = data;
    }, error => {
      alert("false")
      })
  }

}
