import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product_id = 0;
  productDetails: any = [];
  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.product_id = data.id;

      this.productsService.viewProduct(this.product_id).subscribe(productData => {
        this.productDetails = productData;
        console.log(this.productDetails);
      });
    });
  }

  updateProduct(form: any){
    const updateProduct = {
      id: form.value.id,
      categoryId: form.value.categoryId,
      productName: form.value.productName,
      description: form.value.description,
      rating: form.value.product_rating,
      price: form.value.product_price,
      productImg: '',
      isAvailable: 1,
      color: form.value.product_color,
      reviews: form.value.product_category,
  };
  console.log(form);
  this.productsService.updateProduct(this.product_id, updateProduct).subscribe(data => {
    console.log(data);
  });
  
}
}
