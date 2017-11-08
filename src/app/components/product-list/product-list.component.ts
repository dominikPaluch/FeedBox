import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/Product";
import {TypeOfProductEnum} from "../../models/typeOfProductEnum";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor() {
    this.products = [
      {name: 'Ananas', photo: 'glry1.png', price: '6.99 zł', type: TypeOfProductEnum.FRUITS},
      {name: 'Kiwi', photo: 'glry2.png', price: '6.99 zł', type: TypeOfProductEnum.FRUITS},
      {name: 'Cebula', photo: 'glry3.png', price: '6.99 zł', type: TypeOfProductEnum.VEGETABLES},
      {name: 'Czereśnia', photo: 'glry4.png', price: '6.99 zł', type: TypeOfProductEnum.FRUITS},
      {name: 'Kalafior', photo: 'glry5.png', price: '6.99 zł', type: TypeOfProductEnum.VEGETABLES},
      {name: 'Mix owoców', photo: 'inner1.png', price: '6.99 zł', type: TypeOfProductEnum.FRUITS},
      {name: 'Grejfrut', photo: 'inner2.png', price: '6.99 zł', type: TypeOfProductEnum.FRUITS},
      {name: 'Granat', photo: 'product-1.jpg', price: '19.99 zł', type: TypeOfProductEnum.FRUITS},
      {name: 'Rzodkiewka', photo: 'product-2.jpg', price: '9.99 zł', type: TypeOfProductEnum.VEGETABLES},
      {name: 'Kapusta', photo: 'product-3.jpg', price: '4.99 zł', type: TypeOfProductEnum.VEGETABLES},
      {name: 'Kukurydza', photo: 'product-4.jpg', price: '3.99 zł', type: TypeOfProductEnum.VEGETABLES},
      {name: 'Marchewka', photo: 'product-5.jpg', price: '6.99 zł', type: TypeOfProductEnum.VEGETABLES},
      {name: 'Mango', photo: 'product-6.jpg', price: '12.99 zł', type: TypeOfProductEnum.FRUITS},
      {name: 'Pomidor', photo: 'product-7.jpg', price: '9.99 zł', type: TypeOfProductEnum.VEGETABLES},
      {name: 'Borówka', photo: 'product-8.png', price: '5.99 zł', type: TypeOfProductEnum.FRUITS}
    ];
  }

  ngOnInit() {
  }

}
