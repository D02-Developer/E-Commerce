import { ProductsService } from './../products.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

product_id = 0;
productDetails: any = [];
  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.product_id = data.id;
    });

    this.productsService.viewProduct(this.product_id).subscribe(viewData => {
      this.productDetails = viewData;
    });

  }

}
