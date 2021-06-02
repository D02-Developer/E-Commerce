import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpClient: HttpClient) { }

  createProduct(productBody: any): Observable<any> {
    const URL = "http://localhost:3000/products";
    return this._httpClient.post(URL, productBody);
  }

  viewProduct(productId: any): Observable<any> {
    const URL = "http://localhost:3000/products/"+productId;
    return this._httpClient.get(URL);
  }

  updateProduct(productId: any, productBody: any): Observable<Products> {
    const URL = "http://localhost:3000/products/" + productId;
    return this._httpClient.put<Products>(URL, productBody);
  }

  deleteProduct(productId: any): Observable<Products> {
    const URL = "http://localhost:3000/products/" + productId;
    return this._httpClient.delete<Products>(URL);
  }

  searchCategoryProduct(categoryId: any): Observable<any> {
    const URL = "http://localhost:3000/products?categoryId="+categoryId;
    return this._httpClient.get(URL);
  }

  searchDateProduct(dateParam: any): Observable<Products> {
    const URL = "http://localhost:3000/products/date=" + dateParam;
    return this._httpClient.get<Products>(URL);
  }

  getCategory() {
    const categoryURL = "http://localhost:3000/categories";
    return this._httpClient.get(categoryURL);
  }

  getAllProducts(): Observable<any>{
    const productUrl = 'http://localhost:3000/products';
    return this._httpClient.get(productUrl); // return an observable
  }

}
