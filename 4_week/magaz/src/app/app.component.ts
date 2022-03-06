import {Component} from '@angular/core';

export interface Product {
  id?: number
  name: string
  rating: number
  image?: string
  link?: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = [
    {
      id: 1,
      name: "MSI GE76 Raider Gaming Laptop Intel Core i7-11800H,",
      rating: 4.5,
      image: "assets/img/1.png",
      link: "https://www.amazon.com/MSI-GE76-i7-11800H-GeForce-Windows/dp/B09FXJN548/ref=sr_1_2?keywords=gaming+laptops&pf_rd_i=23508887011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=434db2ed-6d53-4c59-b173-e8cd550a2e4f&pf_rd_r=2M9977XSGSAVBQQ94Q3Y&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1645532816&sr=8-2"
    },
    {
      id: 2,
      name: "ASUS ROG Strix G15 (2021) Gaming Laptop",
      rating: 4.5,
      image: "assets/img/2.png",
      link: "https://www.amazon.com/ASUS-Display-GeForce-Keyboard-G513IC-EB73/dp/B09DDJ84WK/ref=sr_1_9?keywords=gaming+laptops&pf_rd_i=23508887011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=434db2ed-6d53-4c59-b173-e8cd550a2e4f&pf_rd_r=2M9977XSGSAVBQQ94Q3Y&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1645532816&sr=8-9"
    },
    {
      id: 3,
      name: "Luna Controller ",
      rating: 4,
      image: "assets/img/3.png",
      link: "https://www.amazon.com/Amazon-Luna-Controller/dp/B07P989QTJ/ref=sr_1_1_sspa?keywords=gaming+controller&pf_rd_i=23508887011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=434db2ed-6d53-4c59-b173-e8cd550a2e4f&pf_rd_r=2M9977XSGSAVBQQ94Q3Y&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1645532955&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFGUUZXMEhKOFRZUlAmZW5jcnlwdGVkSWQ9QTA0NDc5NzIyU0M5VldXRlpDNElYJmVuY3J5cHRlZEFkSWQ9QTA4OTUwMzYxN0pJUzlHQVkyUThNJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="
    },
    {
      id: 4,
      name: "PowerA Enhanced Wired Controller for Xbox Series X|S - Black",
      rating: 4.5,
      image: "assets/img/4.png",
      link: "https://www.amazon.com/PowerA-Enhanced-Wired-Controller-Xbox-x/dp/B08F454ZK5/ref=sr_1_4?keywords=gaming+controller&pf_rd_i=23508887011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=434db2ed-6d53-4c59-b173-e8cd550a2e4f&pf_rd_r=2M9977XSGSAVBQQ94Q3Y&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1645532995&sr=8-4"
    },
    {
      id: 5,
      name: "Marvel Hasbro Legends Series Venom",
      rating: 5,
      image: "assets/img/5.png",
      link: "https://www.amazon.com/Marvel-Classic-Venom-Legends-Fade/dp/B084PV8MMJ/ref=sr_1_1?keywords=gaming+action+figures&pf_rd_i=23508887011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=434db2ed-6d53-4c59-b173-e8cd550a2e4f&pf_rd_r=2M9977XSGSAVBQQ94Q3Y&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1645533109&s=toys-and-games-intl-ship&sr=1-1"
    },
    {
      id: 6,
      name: "Star Wars The Vintage",
      rating: 5,
      image: "assets/img/6.png",
      link: "https://www.amazon.com/Vintage-Collection-Gaming-Greats-Stormtrooper/dp/B08PL6Z617/ref=sr_1_2?keywords=gaming+action+figures&pf_rd_i=23508887011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=434db2ed-6d53-4c59-b173-e8cd550a2e4f&pf_rd_r=2M9977XSGSAVBQQ94Q3Y&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1645533135&s=toys-and-games-intl-ship&sr=1-2"
    },
    {
      id: 7,
      name: "Ripple Junction Playstation",
      rating: 4.5,
      image: "assets/img/7.png",
      link: "https://www.amazon.com/Ripple-Junction-Playstation-Vintage-T-Shirt/dp/B00OWA823Q/ref=sr_1_2?keywords=gaming+apparel&pf_rd_i=23508887011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=434db2ed-6d53-4c59-b173-e8cd550a2e4f&pf_rd_r=2M9977XSGSAVBQQ94Q3Y&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1645533162&sr=8-2"
    },
    {
      id: 8,
      name: "Heartbeat of a Gamer 2",
      rating: 4.5,
      image: "assets/img/8.png",
      link: "https://www.amazon.com/zerogravitee-Heartbeat-Gamer-Hooded-Sweatshirt/dp/B078Z4QWH6/ref=sr_1_5?keywords=gaming+apparel&pf_rd_i=23508887011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=434db2ed-6d53-4c59-b173-e8cd550a2e4f&pf_rd_r=2M9977XSGSAVBQQ94Q3Y&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1645533188&sr=8-5"
    },
    {
      id: 9,
      name: "LeadsaiL Gaming Mouse Wired RGB PC Gaming Mice",
      rating: 4.5,
      image: "assets/img/9.png",
      link: "https://www.amazon.com/LeadsaiL-Programmable-Backlight-Ergonomic-Computer/dp/B09172433Z/ref=sr_1_1_sspa?keywords=gaming+mouse&pf_rd_i=23508887011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=434db2ed-6d53-4c59-b173-e8cd550a2e4f&pf_rd_r=2M9977XSGSAVBQQ94Q3Y&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1645533218&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyWlI4NENYVlNPUkdSJmVuY3J5cHRlZElkPUExMDMwNDA2MUVMNVdHMUNVTUMzRyZlbmNyeXB0ZWRBZElkPUEwODYzNTcwSDk0T0NHMVo5VVRHJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="
    },
    {
      id: 10,
      name: "Logitech G502 HERO High Performance Wired Gaming Mouse,",
      rating: 4,
      image: "assets/img/10.png",
      link: "https://www.amazon.com/Logitech-G502-Performance-Gaming-Mouse/dp/B07GBZ4Q68/ref=sr_1_3?keywords=gaming+mouse&pf_rd_i=23508887011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=434db2ed-6d53-4c59-b173-e8cd550a2e4f&pf_rd_r=2M9977XSGSAVBQQ94Q3Y&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1645533218&sr=8-3"
    }
  ]

  updateProducts(product: Product) {
    this.products.unshift(product)

  }
}
