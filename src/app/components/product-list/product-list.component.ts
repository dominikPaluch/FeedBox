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
  id = 1;

  constructor() {
    this.initData();
  }

  ngOnInit() {
  }

  initData() {
    this.products = [
      {name: 'Ananas', photo: 'glry1.png', price: '7.99 zł', type: TypeOfProductEnum.FRUITS},
      {name: 'Kiwi', photo: 'glry2.png', price: '3.99 zł', type: TypeOfProductEnum.FRUITS},
      {name: 'Cebula', photo: 'glry3.png', price: '1.99 zł', type: TypeOfProductEnum.VEGETABLES},
      {name: 'Czereśnia', photo: 'glry4.png', price: '16.99 zł', type: TypeOfProductEnum.FRUITS},
      {name: 'Mix owoców', photo: 'inner1.png', price: '22.99 zł', type: TypeOfProductEnum.FRUITS},
      {name: 'Grejfrut', photo: 'inner2.png', price: '6.99 zł', type: TypeOfProductEnum.FRUITS},
      {name: 'Granat', photo: 'product-1.jpg', price: '19.99 zł', type: TypeOfProductEnum.FRUITS},
      {name: 'Rzodkiewka', photo: 'product-2.jpg', price: '9.99 zł', type: TypeOfProductEnum.VEGETABLES},
      {name: 'Kapusta', photo: 'product-3.jpg', price: '4.99 zł', type: TypeOfProductEnum.VEGETABLES},
      {name: 'Kukurydza', photo: 'product-4.jpg', price: '3.99 zł', type: TypeOfProductEnum.VEGETABLES},
      {name: 'Marchewka', photo: 'product-5.jpg', price: '6.99 zł', type: TypeOfProductEnum.VEGETABLES},
      {name: 'Mango', photo: 'product-6.jpg', price: '12.99 zł', type: TypeOfProductEnum.FRUITS},
      {name: 'Pomidor', photo: 'product-7.jpg', price: '9.99 zł', type: TypeOfProductEnum.VEGETABLES},
      {name: 'Borówka', photo: 'product-8.png', price: '5.99 zł', type: TypeOfProductEnum.FRUITS},
      {name: 'Sok mango', photo: 'juice1.png', price: '4.99 zł', type: TypeOfProductEnum.JUICES},
      {name: 'Sok marchewkowy', photo: 'juice2.png', price: '5.99 zł', type: TypeOfProductEnum.JUICES},
      {name: 'Sok ananas', photo: 'juice3.png', price: '6.99 zł', type: TypeOfProductEnum.JUICES},
      {name: 'Steak', photo: 'beef1.png', price: '16.99 zł', type: TypeOfProductEnum.BEEF},
      {name: 'Mięso dobre', photo: 'beef2.png', price: '19.99 zł', type: TypeOfProductEnum.BEEF},
      {name: 'Kefir', photo: 'milk2.png', price: '2.99 zł', type: TypeOfProductEnum.MILKS},
      {name: 'Jogurt naturalny', photo: 'milk1.png', price: '3.99 zł', type: TypeOfProductEnum.MILKS},
    ];
  }

  getItem(product) {
    console.log(product);
  }

  select(id) {
    this.initData();
    this.id = id;

    if (id === 2) {
      this.products = this.products.filter((val, i) => val.type === TypeOfProductEnum.VEGETABLES);
    } else if (id === 3) {
      this.products = this.products.filter((val, i) => val.type === TypeOfProductEnum.FRUITS);
    } else if (id === 4) {
      this.products = this.products.filter((val, i) => val.type === TypeOfProductEnum.MILKS);
    } else if (id === 5) {
      this.products = this.products.filter((val, i) => val.type === TypeOfProductEnum.JUICES);
    } else if (id === 6) {
      this.products = this.products.filter((val, i) => val.type === TypeOfProductEnum.BEEF);
    }
  }
}
