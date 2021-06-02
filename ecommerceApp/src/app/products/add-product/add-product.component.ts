import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  addNewProduct(form: any) {
    console.log(form.value);

    let newProduct = {
      id: 19,
      categoryId: form.value.product_category,
      name: form.value.product_name,
      description: form.value.product_description,
      rating: form.value.product_rating,
      price: form.value.product_price,
      productImg: '',
      isAvailable: 1,
      color: form.value.product_color,
      review: form.value.product_category,
    };

    console.log(newProduct);
    this.productsService.createProduct(newProduct).subscribe(data => {
      console.log(data);
    })

  }

}
