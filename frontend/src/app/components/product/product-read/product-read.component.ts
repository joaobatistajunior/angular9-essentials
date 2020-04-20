import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[];
  displayedColumns = ['id', 'name', 'price', 'action'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.products = products;
    });
  }

}
