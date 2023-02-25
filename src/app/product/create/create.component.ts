import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../service/ProductService";
import {Product} from "../../../model/Product";

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
    price: new FormControl(""),
    status: new FormControl("")
  })

  constructor(private route: ActivatedRoute, private productService : ProductService, private router : Router) {
  }

  ngOnInit(): void {
  }

  createProduct() {
    let productNew = this.formCreate.value
    this.productService.create(productNew).subscribe(data =>{
    }, error => {
    })
    this.router.navigate(['/show'])
  }

}
