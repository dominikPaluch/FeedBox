import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../../models/Product";
import { TypeOfProductEnum } from "../../models/typeOfProductEnum";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() nums: number;

  products: Product[];
  copyProducts: Product[];
  id = 1;
  counterCart = 0;

  constructor() {
  }

  ngOnInit() {
    console.log('aaa')
    this.initData();
  }

  initData() {
    this.products = [
      { name: 'Mix owoców', photo: 'inner1.png', price: '9.99 zł', type: TypeOfProductEnum.FRUITS },
      { name: 'Zestaw 1', photo: 'box10.png', price: '12.99 zł', type: TypeOfProductEnum.FOODBOX },
      { name: 'Zestaw 2', photo: 'box11.png', price: '13.99 zł', type: TypeOfProductEnum.FOODBOX },
      { name: 'Marchewka', photo: 'product-5.jpg', price: '6.99 zł', type: TypeOfProductEnum.VEGETABLES },
      { name: 'Mango', photo: 'product-6.jpg', price: '12.99 zł', type: TypeOfProductEnum.FRUITS },
      { name: 'Pomidor', photo: 'product-7.jpg', price: '9.99 zł', type: TypeOfProductEnum.VEGETABLES },
      { name: 'Zestaw 3', photo: 'box12.png', price: '17.99 zł', type: TypeOfProductEnum.FOODBOX },
      { name: 'Zestaw 4', photo: 'box8.png', price: '9.99 zł', type: TypeOfProductEnum.FOODBOX },
      { name: 'Zestaw 5', photo: 'box2.png', price: '11.99 zł', type: TypeOfProductEnum.FOODBOX },
      { name: 'Zestaw 6', photo: 'box3.png', price: '8.99 zł', type: TypeOfProductEnum.FOODBOX },
      { name: 'Zestaw 7', photo: 'box4.png', price: '7.99 zł', type: TypeOfProductEnum.FOODBOX },
      { name: 'Rzodkiewka', photo: 'product-2.jpg', price: '9.99 zł', type: TypeOfProductEnum.VEGETABLES },
      { name: 'Granat', photo: 'product-1.jpg', price: '19.99 zł', type: TypeOfProductEnum.FRUITS },
      { name: 'Zestaw 8', photo: 'box5.png', price: '14.99 zł', type: TypeOfProductEnum.FOODBOX },
      { name: 'Zestaw 9', photo: 'box9.png', price: '21.99 zł', type: TypeOfProductEnum.FOODBOX },
      { name: 'Zestaw 10', photo: 'box6.png', price: '11.99 zł', type: TypeOfProductEnum.FOODBOX },
      { name: 'Zestaw 11', photo: 'box7.png', price: '7.99 zł', type: TypeOfProductEnum.FOODBOX },
      { name: 'Zestaw 12', photo: 'box1.png', price: '8.99 zł', type: TypeOfProductEnum.FOODBOX },
      { name: 'Zestaw 13', photo: 'glry1.png', price: '7.99 zł', type: TypeOfProductEnum.FRUITS },
      { name: 'Kiwi', photo: 'glry2.png', price: '3.99 zł', type: TypeOfProductEnum.FRUITS },
      { name: 'Cebula', photo: 'glry3.png', price: '1.99 zł', type: TypeOfProductEnum.VEGETABLES },
      { name: 'Czereśnia', photo: 'glry4.png', price: '16.99 zł', type: TypeOfProductEnum.FRUITS },
      { name: 'Steak', photo: 'beef1.png', price: '16.99 zł', type: TypeOfProductEnum.BEEF },
      { name: 'Mięso dobre', photo: 'beef2.png', price: '16.99 zł', type: TypeOfProductEnum.BEEF },
      { name: 'Kapusta', photo: 'product-3.jpg', price: '4.99 zł', type: TypeOfProductEnum.VEGETABLES },
      { name: 'Kukurydza', photo: 'product-4.jpg', price: '3.99 zł', type: TypeOfProductEnum.VEGETABLES },
      { name: 'Borówka', photo: 'product-8.png', price: '5.99 zł', type: TypeOfProductEnum.FRUITS },
      { name: 'Sok marchewkowy', photo: 'juice2.png', price: '5.99 zł', type: TypeOfProductEnum.JUICES },
      { name: 'Grejfrut', photo: 'inner2.png', price: '6.99 zł', type: TypeOfProductEnum.FRUITS },
      { name: 'Kefir', photo: 'milk2.png', price: '2.99 zł', type: TypeOfProductEnum.MILKS },
      { name: 'Jogurt naturalny', photo: 'milk1.png', price: '3.99 zł', type: TypeOfProductEnum.MILKS },
    ];

    if (this.nums === 0) {

    } else {
      this.products = this.products.slice(0, this.nums);
    }

    this.copyProducts = JSON.parse(JSON.stringify(this.products));
  }

  getItem(product) {

  }

  addToCart() {
    this.counterCart++;
  }

  removeFromCart() {
    this.counterCart--;
  }

  getProductsNumber(id): boolean {
    let productsFromCategory: Product[];

    let productsCopy: Product[] = JSON.parse(JSON.stringify(this.copyProducts));

    if (id === 2) {
      productsFromCategory = productsCopy.filter((val, i) => val.type === TypeOfProductEnum.VEGETABLES);
    } else if (id === 3) {
      productsFromCategory = productsCopy.filter((val, i) => val.type === TypeOfProductEnum.FRUITS);
    } else if (id === 4) {
      productsFromCategory = productsCopy.filter((val, i) => val.type === TypeOfProductEnum.MILKS);
    } else if (id === 5) {
      productsFromCategory = productsCopy.filter((val, i) => val.type === TypeOfProductEnum.JUICES);
    } else if (id === 6) {
      productsFromCategory = productsCopy.filter((val, i) => val.type === TypeOfProductEnum.BEEF);
    } else if (id === 7) {
      productsFromCategory = productsCopy.filter((val, i) => val.type === TypeOfProductEnum.FOODBOX);
    }

    if (productsFromCategory.length === 0) {
      return false;
    }
    return true;
  }

  select(id) {
    // this.initData();
    this.id = id;

    if (id === 2) {
      this.products = this.copyProducts.filter((val, i) => val.type === TypeOfProductEnum.VEGETABLES);
    } else if (id === 3) {
      this.products = this.copyProducts.filter((val, i) => val.type === TypeOfProductEnum.FRUITS);
    } else if (id === 4) {
      this.products = this.copyProducts.filter((val, i) => val.type === TypeOfProductEnum.MILKS);
    } else if (id === 5) {
      this.products = this.copyProducts.filter((val, i) => val.type === TypeOfProductEnum.JUICES);
    } else if (id === 6) {
      this.products = this.copyProducts.filter((val, i) => val.type === TypeOfProductEnum.BEEF);
    } else if (id === 7) {
      this.products = this.copyProducts.filter((val, i) => val.type === TypeOfProductEnum.FOODBOX);
    } else if (id === 1) {
      this.products = this.copyProducts;
    }
  }
}
