import { Component, Input, HostBinding } from '@angular/core';
import { Product  } from '../product.model';
import { I18nPluralPipe } from '@angular/common';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})
export class ProductRowComponent {
  @Input() product: Product;

  constructor() { }


}
