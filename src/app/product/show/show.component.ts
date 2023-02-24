import {Component, OnInit} from '@angular/core';
import {Product} from "../../../model/Product";
import {ProductService} from "../../service/ProductService";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit{

  products: Product[] = [];
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.products = this.productService.products
  }

}
