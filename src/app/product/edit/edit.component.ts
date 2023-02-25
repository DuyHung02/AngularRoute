import {Component, OnInit} from '@angular/core';
import {Product} from "../../../model/Product";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../service/ProductService";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  id: any;
  product: Product | undefined;
  formEdit! : FormGroup;

  constructor(private route: ActivatedRoute, private productService : ProductService, private router : Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.productService.findById(this.id).subscribe(data =>{
        this.product = data
        this.formEdit = new FormGroup({
          id: new FormControl(this.product?.id),
          name: new FormControl(this.product?.name),
          image: new FormControl(this.product?.image),
          price: new FormControl(this.product?.price),
          status: new FormControl(this.product?.status)
        })
      })
    }
  }

  editProduct() {
    let productNew = this.formEdit.value
    this.productService.create(productNew).subscribe(data =>{})
    this.router.navigate(['/show'])
  }

}
