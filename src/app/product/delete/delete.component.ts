// import {Component, OnInit} from '@angular/core';
// import {FormControl, FormGroup} from "@angular/forms";
// import {ActivatedRoute, Router} from "@angular/router";
// import {ProductService} from "../../service/ProductService";
// import {Product} from "../../../model/Product";
//
// @Component({
//   selector: 'app-delete',
//   templateUrl: './delete.component.html',
//   styleUrls: ['./delete.component.css']
// })
// export class DeleteComponent implements OnInit{
//
//   id: any;
//   product: Product | undefined;
//   formDelete !: FormGroup;
//
//   constructor(private route: ActivatedRoute, private productService : ProductService, private router : Router) {
//   }
//
//   ngOnInit(): void {
//     this.id = this.route.snapshot.paramMap.get('id');
//     if (this.id != null) {
//       this.product = this.productService.findProductById(this.id);
//       this.formDelete = new FormGroup({
//         id: new FormControl(this.product?.id),
//         name: new FormControl(this.product?.name),
//         image: new FormControl(this.product?.image),
//         price: new FormControl(this.product?.price)
//       })
//     }
//   }
//
//   deleteProduct() {
//     let productNew = this.formDelete.value
//     let index = this.productService.findIndexById(productNew.id)
//     this.productService.products.splice(index, 1)
//     this.router.navigate(['/show'])
//   }
// }
