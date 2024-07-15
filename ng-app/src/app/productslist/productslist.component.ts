import { Component } from '@angular/core';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrl: './productslist.component.css'
})
export class ProductslistComponent {
  products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Shirt', price: 25, category: 'Clothing' },
    { name: 'Headphones', price: 75, category: 'Electronics' },
    { name: 'Dress', price: 50, category: 'Clothing' },
    { name: 'Coffee Maker', price: 80, category: 'Home' },
  ];
  
  selectedCategory: string = '';
  

  get filteredProducts(){
    return this.products.filter((item) => item.category == this.selectedCategory);
    
   }


  

 
}
