import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../service/ProductService";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

  formCreate : FormGroup = new FormGroup({
    id: new FormControl("", [Validators.required, Validators.max(50)]),
    name: new FormControl(""),
    image: new FormControl(""),
    price: new FormControl("")
  })

  constructor(private route: ActivatedRoute, private productService : ProductService, private router : Router) {
  }

  ngOnInit(): void {
  }

  createProduct() {
    this.productService.products.push(this.formCreate.value)
    this.router.navigate(['/show'])
  }

}
