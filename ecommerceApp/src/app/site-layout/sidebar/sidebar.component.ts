import { ProductsService } from './../../products/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  // categoryList: Category = [];
  categoryList: any = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getCategory().subscribe((data) => {
      //console.log(data);
      this.categoryList = data;
    })
  }

}
