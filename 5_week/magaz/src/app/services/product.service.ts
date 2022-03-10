import {Injectable} from '@angular/core';
import {Product} from "../app.component";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[];
  constructor() {
    this.products = [
      {
        id: 1,
        name: "Fiodio Mechanical Gaming Keyboard",
        category: 1,
        likes: 3,
        rating: 4.5,
        image: "assets/img/1.png",
        link: "https://www.amazon.com/FIODIO-Mechanical-Anti-ghosting-Quick-Response-Multimedia/dp/B086168SJT/ref=sr_1_1_sspa?keywords=gaming+keyboard&pd_rd_r=cad06b87-d87d-45f9-ba3c-63d8c3f46eaa&pd_rd_w=TOhCK&pd_rd_wg=WfE5o&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=DAM9E9HGCCM0GH5ZS436&qid=1646641291&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFaNVRNTlZNMEs1NDgmZW5jcnlwdGVkSWQ9QTA1MDA2OTBSMUZZSjNXVVo3NlQmZW5jcnlwdGVkQWRJZD1BMDE4MTMyNlhIUk5YTEtZT0U5RCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
      },
      {
        id: 2,
        name: "Mechanical Gaming Keyboard and Mouse Set with Aluminium Alloy Panel USB",
        category: 1,
        likes: 6,
        rating: 4.5,
        image: "assets/img/2.png",
        link: "https://www.amazon.com/Mechanical-Gaming-Keyboard-Mouse-Aluminium/dp/B09NVLSFNJ/ref=sr_1_2_sspa?keywords=gaming+keyboard&pd_rd_r=cad06b87-d87d-45f9-ba3c-63d8c3f46eaa&pd_rd_w=TOhCK&pd_rd_wg=WfE5o&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=DAM9E9HGCCM0GH5ZS436&qid=1646641291&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFaNVRNTlZNMEs1NDgmZW5jcnlwdGVkSWQ9QTA1MDA2OTBSMUZZSjNXVVo3NlQmZW5jcnlwdGVkQWRJZD1BMDA4MTU1MENYQlJLWFhNTFJHUyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
      },
      {
        id: 3,
        name: "havit Wired Gaming Keyboard Mouse Combo LED Rainbow Backlit Gaming Keyboard",
        category: 1,
        likes: 5,
        rating: 5,
        image: "assets/img/3.png",
        link: "https://www.amazon.com/dp/B016Y2BVKA/ref=sspa_dk_detail_3?psc=1&pd_rd_i=B016Y2BVKA&pd_rd_w=p0PbE&pf_rd_p=57cbdc41-b731-4e3d-aca7-49078b13a07b&pd_rd_wg=gbher&pf_rd_r=1MSHBKSDZE8YNCRNJMYB&pd_rd_r=5624bd8e-ae41-4761-960b-95e3760346e1&s=pc&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyRVhJSDFSM1BSNlM2JmVuY3J5cHRlZElkPUEwNjI4OTE5UDcxUEFPRlJXMlQ3JmVuY3J5cHRlZEFkSWQ9QTA1MzgyMTgyTTk5QlNKQkNIT1FPJndpZGdldE5hbWU9c3BfZGV0YWlsX3RoZW1hdGljJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="
      },
      {
        id: 4,
        name: "MIHIYIRY K400 Mechanical Gaming Keyboard",
        category: 1,
        likes: 3,
        rating: 5,
        image: "assets/img/4.png",
        link: "https://www.amazon.com/dp/B09GFSRXJ3/ref=sspa_dk_detail_7?psc=1&pd_rd_i=B09GFSRXJ3&pd_rd_w=LVcDp&pf_rd_p=b9951ce4-3bd8-4b04-9123-0fda35d6155e&pd_rd_wg=gbher&pf_rd_r=1MSHBKSDZE8YNCRNJMYB&pd_rd_r=5624bd8e-ae41-4761-960b-95e3760346e1&s=pc&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyRVhJSDFSM1BSNlM2JmVuY3J5cHRlZElkPUEwMjM1MTgxUEFBNU1HQzdRNkI1JmVuY3J5cHRlZEFkSWQ9QTA3MzU0MTYyVVZUUFA2TUpIVFgwJndpZGdldE5hbWU9c3BfZGV0YWlsJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="
      },
      {
        id: 5,
        name: "Ficihp USB Mechanical Keyboard, Built-in 12.6 inches Touchscreen",
        category: 1,
        likes: 7,
        rating: 4,
        image: "assets/img/5.png",
        link: "https://www.amazon.com/dp/B09MJ4PSFP/ref=sspa_dk_detail_1?psc=1&pd_rd_i=B09MJ4PSFP&pd_rd_w=nRk6E&pf_rd_p=b9951ce4-3bd8-4b04-9123-0fda35d6155e&pd_rd_wg=aXLTg&pf_rd_r=GY8CNP1CWYQBYDFF41WD&pd_rd_r=4f3a41c2-73a0-469f-a436-bd2b59710ba6&s=pc&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExOEE5NzA1S0xYSU4xJmVuY3J5cHRlZElkPUEwODA3NjU4MTMyNE5aV0lVMjJCMiZlbmNyeXB0ZWRBZElkPUEwMzgwNzk3Slc2U1pSSlVHTUpXJndpZGdldE5hbWU9c3BfZGV0YWlsJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="
      },
      {
        id: 6,
        name: "Colgate Cavity Protection Toothpaste with Fluoride",
        category: 2,
        likes: 3,
        rating: 4.5,
        image: "assets/img/6.png",
        link: "https://www.amazon.com/Colgate-Cavity-Protection-Toothpaste-Fluoride/dp/B01BNEWDFQ/ref=lp_16225006011_1_9"
      },
      {
        id: 7,
        name: "Gillette Sensor3 Comfort Disposable Razors for Men",
        category: 2,
        likes: 3,
        rating: 4.5,
        image: "assets/img/7.png",
        link: "https://www.amazon.com/dp/B07PX77GGS/ref=sspa_dk_detail_4?psc=1&pd_rd_i=B07PX77GGS&pd_rd_w=pBigg&pf_rd_p=b9951ce4-3bd8-4b04-9123-0fda35d6155e&pd_rd_wg=91OUF&pf_rd_r=C8ZJDYPS2SFEG9CABV5G&pd_rd_r=11adb8da-c073-45a5-8498-b2e7aae3269b&s=beauty&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyOUJQWjBFRUxUS1c3JmVuY3J5cHRlZElkPUEwNTQyNjkyMjFMVldRMUVQQVJYSiZlbmNyeXB0ZWRBZElkPUEwODUxODg1MVdWQTBLTjRTQjEwSyZ3aWRnZXROYW1lPXNwX2RldGFpbCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
      },
      {
        id: 8,
        name: "Gillette Heated Razor for Men, Bugatti Limited Edition",
        category: 2,
        likes: 3,
        rating: 4.5,
        image: "assets/img/8.png",
        link: "https://www.amazon.com/dp/B09C6HGX1W/ref=sspa_dk_detail_5?psc=1&pd_rd_i=B09C6HGX1W&pd_rd_w=aIQKi&pf_rd_p=b9951ce4-3bd8-4b04-9123-0fda35d6155e&pd_rd_wg=mPy1R&pf_rd_r=QW8ACF6Q1SJAVXR9ZDKG&pd_rd_r=6fd35153-f7b1-4f1d-8f38-24a7bd08499b&s=beauty&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExSkwzSzZFOU1RUDcyJmVuY3J5cHRlZElkPUEwMzA2NjE3MUdPVzRGMkhHRkhCVCZlbmNyeXB0ZWRBZElkPUEwNDM5NjI3Mlk1MExFOTVHRzk1VyZ3aWRnZXROYW1lPXNwX2RldGFpbCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
      },
      {
        id: 9,
        name: "MANSCAPED™ Electric Groin Hair Trimmer",
        category: 2,
        likes: 3,
        rating: 4.5,
        image: "assets/img/9.png",
        link: "https://www.amazon.com/dp/B08ZYYQ8S9/ref=sspa_dk_detail_4?psc=1&pd_rd_i=B08ZYYQ8S9&pd_rd_w=mClDJ&pf_rd_p=b9951ce4-3bd8-4b04-9123-0fda35d6155e&pd_rd_wg=1bB1h&pf_rd_r=NE8VREQ5TMNWZ34A99SX&pd_rd_r=bc62367d-4270-4a75-ba07-bc4f082131dd&s=beauty&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyMlBIVzVYRTFXSU05JmVuY3J5cHRlZElkPUEwOTY3NDA5M1RMUzg0WDRBOEZQUiZlbmNyeXB0ZWRBZElkPUEwMjA4MDQ0MllLSEYzU01JQkhZQSZ3aWRnZXROYW1lPXNwX2RldGFpbCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
      },
      {
        id: 10,
        name: "MANSCAPED™ The Weed Whacker™",
        category: 2,
        likes: 3,
        rating: 4.5,
        image: "assets/img/10.png",
        link: "https://www.amazon.com/dp/B087GYN931/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B087GYN931&pd_rd_w=7a2Fm&pf_rd_p=57cbdc41-b731-4e3d-aca7-49078b13a07b&pd_rd_wg=uWM3B&pf_rd_r=YE20GGGX8P934JXD7V09&pd_rd_r=d2260038-1b58-4c54-a70e-70dc39e072c4&s=beauty&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyTExMVDI0TTRKMTJEJmVuY3J5cHRlZElkPUEwNDgwNTUzMUZFUFhTU1hGWjBaNiZlbmNyeXB0ZWRBZElkPUExMDA5OTc0M1ZJRktYTlA2UFpWOSZ3aWRnZXROYW1lPXNwX2RldGFpbF90aGVtYXRpYyZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
      },
      {
        id: 11,
        name: "Ripple Junction Playstation Vintage Icons Adult T-Shirt\n",
        category: 3,
        likes: 3,
        rating: 4.5,
        image: "assets/img/11.png",
        link: "https://www.amazon.com/Ripple-Junction-Playstation-Vintage-T-Shirt/dp/B00OWA823Q/ref=sr_1_1?keywords=gaming+apparel&pd_rd_r=abeaa8fb-33c6-4ff3-a8a8-9c4f9004e89d&pd_rd_w=uSBRw&pd_rd_wg=xHT6U&pf_rd_p=09483392-9ac6-434a-a3d7-39d83662f54a&pf_rd_r=DAM9E9HGCCM0GH5ZS436&qid=1646641676&sr=8-1"
      },
      {
        id: 12,
        name: "Ripple Junction Naruto Shippuden Ichiraku Ramen Shop Light Weight Crew T-Shirt\n",
        category: 3,
        likes: 3,
        rating: 4.5,
        image: "assets/img/12.png",
        link: "https://www.amazon.com/dp/B00U0HLK5C/ref=sspa_dk_detail_3?psc=1p13NParams&smid=A3L3S0S1T65QYZ&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyVUgzVVdLVTlSSlRWJmVuY3J5cHRlZElkPUEwODg3NjIzM1NaNVFINVEzREVWNCZlbmNyeXB0ZWRBZElkPUExMDA2NDY0TTI3T0VSOU9NSkdXJndpZGdldE5hbWU9c3BfZGV0YWlsMiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
      },
      {
        id: 13,
        name: "Riot Society Men's Long Sleeve Graphic Fashion T-Shirt",
        category: 3,
        likes: 3,
        rating: 4.5,
        image: "assets/img/13.png",
        link: "https://www.amazon.com/dp/B07WWZF8MT/ref=sspa_dk_detail_6?psc=1&pd_rd_i=B07WWZF8MT&pd_rd_w=4rmwr&pf_rd_p=57cbdc41-b731-4e3d-aca7-49078b13a07b&pd_rd_wg=5AErg&pf_rd_r=WJJSX1MTANS4XH33JY9Y&pd_rd_r=c9bb46f4-375d-45f9-8240-7e84bcb245a2&s=apparel&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzRFJPN0s1V0tYUk9RJmVuY3J5cHRlZElkPUEwOTY5MDEzM1JNRlVCODdLMFJaNSZlbmNyeXB0ZWRBZElkPUEwNzY3NTgwMzBGUjNNRUlLMEZCOCZ3aWRnZXROYW1lPXNwX2RldGFpbF90aGVtYXRpYyZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
      },
      {
        id: 14,
        name: "Riot Society Men's Graphic or Embroidered Hoodie Hooded Sweatshirt\n",
        category: 3,
        likes: 3,
        rating: 4.5,
        image: "assets/img/14.png",
        link: "https://www.amazon.com/dp/B09CFWPDMF/ref=sspa_dk_detail_7?psc=1p13NParams&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFRRVNEWU9SN1BGTE4mZW5jcnlwdGVkSWQ9QTA0NDA1MDAxRlFJQURTUkpOS0FQJmVuY3J5cHRlZEFkSWQ9QTAxNTMxOTMzMUwwQ0RYOUI3RFMzJndpZGdldE5hbWU9c3BfZGV0YWlsMiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
      },
      {
        id: 15,
        name: "Riot Society Men's Graphic or Embroidered Hoodie Hooded Sweatshirt",
        category: 3,
        likes: 3,
        rating: 4.5,
        image: "assets/img/15.png",
        link: "https://www.amazon.com/dp/B0991Q8W1Q/ref=sspa_dk_detail_1?psc=1p13NParams&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyNzZTUEEwN1hXVFpJJmVuY3J5cHRlZElkPUEwNzUwMzUxRUYzUTVKQ0FBWUlNJmVuY3J5cHRlZEFkSWQ9QTAyODQ4MzEzTEo3T1VVT0xLS1g2JndpZGdldE5hbWU9c3BfZGV0YWlsMiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
      },
      {
        id: 16,
        name: "Pokemon Pikachu 8\" Plush - Officially Licensed and Stuffed Animal Material\n",
        category: 4,
        likes: 3,
        rating: 4.5,
        image: "assets/img/16.png",
        link: "https://www.amazon.com/Pokemon-Plush-Inch-Pikachu/dp/B078W3Q73P/?_encoding=UTF8&pd_rd_w=8ZVS8&pf_rd_p=0a0fec03-b408-45eb-8e57-18d0d31850f9&pf_rd_r=DAM9E9HGCCM0GH5ZS436&pd_rd_r=abeaa8fb-33c6-4ff3-a8a8-9c4f9004e89d&pd_rd_wg=xHT6U&ref_=pd_gw_unk"
      },
      {
        id: 17,
        name: "Charmander Plush Stuffed Animal Toys 8 inch\n",
        category: 4,
        likes: 3,
        rating: 4.5,
        image: "assets/img/17.png",
        link: "https://www.amazon.com/dp/B09HSWM3BB/ref=sspa_dk_detail_4?psc=1&pd_rd_i=B09HSWM3BB&pd_rd_w=Elgv6&pf_rd_p=b9951ce4-3bd8-4b04-9123-0fda35d6155e&pd_rd_wg=Zreob&pf_rd_r=7SFH4PSQZNR3AN59BKVM&pd_rd_r=0b832c33-08e9-408b-802c-9e9a47162519&s=toys-and-games&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExTUY1M0FUOUVLTTgzJmVuY3J5cHRlZElkPUEwMzcxMjc4SEVCS05EVzNOOVhOJmVuY3J5cHRlZEFkSWQ9QTEwNDE3NjA3RFdTRTNVVVZQWEgmd2lkZ2V0TmFtZT1zcF9kZXRhaWwmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl"
      },
      {
        id: 18,
        name: "Pokemon Plush, 8\" Inch Plush Litten\n",
        category: 4,
        likes: 3,
        rating: 4.5,
        image: "assets/img/18.png",
        link: "https://www.amazon.com/dp/B078W3HWWC/ref=sspa_dk_detail_1?psc=1&pd_rd_i=B078W3HWWC&pd_rd_w=vBbXR&pf_rd_p=b9951ce4-3bd8-4b04-9123-0fda35d6155e&pd_rd_wg=DiFgg&pf_rd_r=ZD2B0S74HJ960T7W4VWP&pd_rd_r=404324b2-5ae0-49ce-8d3e-9ff43a2d7751&s=toys-and-games&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExQ0VFM1BDOTY2RkY1JmVuY3J5cHRlZElkPUEwNDk0MDM2M01EWk9XUko1WFlYNCZlbmNyeXB0ZWRBZElkPUEwNjUyNDYyM09OM1JVVjZERFkwRiZ3aWRnZXROYW1lPXNwX2RldGFpbCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
      },
      {
        id: 19,
        name: "Pokémon Gengar Plush Stuffed Animal Toy - Large 12\" - Ages 2+\n",
        category: 4,
        likes: 3,
        rating: 4.5,
        image: "assets/img/19.png",
        link: "https://www.amazon.com/dp/B07NXVHHN2/ref=sspa_dk_detail_3?psc=1&pd_rd_i=B07NXVHHN2&pd_rd_w=tckd3&pf_rd_p=57cbdc41-b731-4e3d-aca7-49078b13a07b&pd_rd_wg=cY3uy&pf_rd_r=7SNFFYSDXYNT3X2DZWX2&pd_rd_r=b6e33c31-8e86-494c-aeb7-157131c9f7a5&s=toys-and-games&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzMjRGUFJPTVBRSUJHJmVuY3J5cHRlZElkPUEwMDY5MDQ3MklFRTdHR1g3NU5NWiZlbmNyeXB0ZWRBZElkPUEwMzU0NjU1MVZMTjRSNENSME5SWSZ3aWRnZXROYW1lPXNwX2RldGFpbF90aGVtYXRpYyZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
      },
      {
        id: 20,
        name: "Pokémon Raichu Plush Stuffed Animal - Large 12",
        category: 4,
        likes: 3,
        rating: 4.5,
        image: "assets/img/20.png",
        link: "https://www.amazon.com/dp/B08T22CR4W/ref=sspa_dk_detail_6?psc=1&pd_rd_i=B08T22CR4W&pd_rd_w=yfTln&pf_rd_p=b9951ce4-3bd8-4b04-9123-0fda35d6155e&pd_rd_wg=lWP6O&pf_rd_r=BVPFARC6KTXWWC9SZABD&pd_rd_r=0a607b85-8fd6-4453-b94e-23312e0618e4&s=toys-and-games&smid=A1B7M9EQGNCLQA&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzUFI0M0pLMlI4MlJSJmVuY3J5cHRlZElkPUEwNDI1NjgxWVIzUkU3QTEzRk42JmVuY3J5cHRlZEFkSWQ9QTAzNDI4NzkxRFpZVkpVVlhBQktSJndpZGdldE5hbWU9c3BfZGV0YWlsJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="
      }
    ]
  }

  getProducts() {
    return this.products

  }

  // deleteProduct(id: number){
  //   this.products = this.products.filter(
  //     product => product.id != id
  //   )
  // }

}
