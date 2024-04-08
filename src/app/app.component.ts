import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-shopping';
  products = [
    {
        name: 'Baseball Cap',
        img: 'assets/images/products/Baseball Cap.png',
        price: '750.00',
        freeShipping: true,
        inStock: true
    },
    {
        name: 'Basketball Shoes',
        img: 'assets/images/products/Basketball Shoes.png',
        price: '2300.00',
        freeShipping: true,
        inStock: true
    },
    {
        name: 'Bluetooth Headset',
        img: 'assets/images/products/Bluetooth Headset.png',
        price: '1800.00',
        freeShipping: false,
        inStock: false
    },
    {
        name: 'Ladies Handbag',
        img: 'assets/images/products/Ladies Handbag.png',
        price: '1200.00',
        freeShipping: false,
        inStock: true
    },
    {
        name: 'Short Sleeve T-shirt',
        img: 'assets/images/products/Short Sleeve T-shirt.png',
        price: '2250.00',
        freeShipping: true,
        inStock: true
    },
    {
        name: "Men's Business Watch",
        img: 'assets/images/products/Watch.png',
        price: '7500.00',
        freeShipping: true,
        inStock: false
    },
  ]

  perantAddToCard(product: any) {
    console.log('Perant - ', product)
  }
}
