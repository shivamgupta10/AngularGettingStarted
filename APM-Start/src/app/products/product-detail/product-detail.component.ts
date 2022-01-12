import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private ac:ActivatedRoute, private router: Router) {
    this.id = this.ac.snapshot.paramMap.get('id');
  }


  pageTitle: string = 'Product Detail';
  id!: string | null
  ngOnInit(): void {
  }

  onBack(): void {
    this.router.navigate(['/products'])
  }

}
