import { Component } from '@angular/core';
import { Cart, Product } from './app.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'lesson_2';
    name: string = "";
    price: number = 0;
    description: string = "";
    picture: string = "";

    purchases: Cart[] = [];

    products: Product[] = [
        { name: 'рубашка модная', price: 1900, description: "100% из льна", picture: "../../assets/short.webp" },
        { name: 'штаны вильветовые', price: 1990, description: "очень удобные", picture: "../../assets/pants.jpeg" },
        { name: 'шляпа крутая', price: 99, description: "супер защита от солнечного удара", picture: "../../assets/hat.jpg" },
        { name: 'носки чистые', price: 99, description: "отлично подойдут к штанам", picture: "../../assets/socs.webp" }
    ];
    totalPrice(purchases: Array<Cart>) {
        var totalPrice = 0;
        purchases.forEach(element => {
            totalPrice += element.price * element.quantity;
        });
        return totalPrice;
    }
    addPurchase(name: string, price: number) {
        var t = new Cart(name, price);
        //if (!this.products.includes(t))
        const found = this.purchases.find((obj: Cart) => {
            return obj.name === name;
        });
        if (!found) {
            t.quantity = 1;
            this.purchases.push(t);
        }


        else
            found.quantity += 1;

    }

}
