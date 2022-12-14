import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  image_url = "assets/images/cart";
  public products: any = [];
  public grandTotal : number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(data => {
      this.products = data;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }

  removeItem(item: any){
    if(confirm('Delete this item in your cart?')){
      this.cartService.removeCartItem(item);
      alert("Items deleted");
    }
  }

  emptyCart(){
    if(confirm('delete all items in your cart?')){
      this.cartService.emptyCart();
      alert("Deleted successfully!");
    }
  }
}
