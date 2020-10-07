import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {CartService} from "../../serviceCart/cart.service";
import {LayoutService} from "../layout.service";

interface state {
  name: string,
  code: string
}

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cols: any[];
  items: any[];
  state: state[];
  city: City[];
  selectedCity: City;
  formGroup: FormGroup;
  sumPrice = 0;
  userInfo = {
    firstName: '',
    lastName: '',
    mobile: '',
    phone: '',
    state: '',
    city: '',
    postalCode: '',
    plaque: '',
    address: ''
  };
  postInfo = {
    typePost: '',
    pricePost: ''
  }

  get formArray(): AbstractControl | null {
    return this.formGroup.get('formArray');
  }

  constructor(private _formBuilder: FormBuilder, private serviceCart: CartService, private servicelayout: LayoutService) {
    this.state = [
      {name: 'آذربایجان شرقی', code: '0'},
      {name: 'آذربایجان غربی', code: '1'},
      {name: 'اردبیل', code: '2'},
      {name: 'اصفهان', code: '3'},
      {name: 'البرز', code: '4'},
      {name: 'ایلام', code: '5'},
      {name: 'بوشهر', code: '6'},
      {name: 'تهران', code: '7'},
      {name: 'چهارمحال و بختیاری', code: '8'},
      {name: 'خراسان جنوبی', code: '9'},
      {name: 'خراسان رضوی', code: '10'},
      {name: 'خراسان شمالی', code: '11'},
      {name: 'خوزستان', code: '12'},
      {name: 'زنجان', code: '13'},
      {name: 'سمنان', code: '14'},
      {name: 'سیستان و بلوچستان', code: '15'},
      {name: 'فارس', code: '16'},
      {name: 'قزوین', code: '17'},
      {name: 'قم', code: '18'},
      {name: 'گلستان', code: '19'},
      {name: 'گیلان', code: '20'},
      {name: 'لرستان', code: '21'},
      {name: 'مازنداران', code: '22'},
      {name: 'مرکزی', code: '23'},
      {name: 'هرمزگان', code: '24'},
      {name: 'همدان', code: '25'},
      {name: 'کردستان', code: '26'},
      {name: 'کرمان', code: '27'},
      {name: 'کرمانشاه', code: '28'},
      {name: 'کهگیلویه و بویراحمد', code: '29'},
      {name: 'یزد', code: '30'},
    ];
    this.city = [
      {name: 'آذربایجان شرقی', code: '0'},
      {name: 'آذربایجان غربی', code: '1'},
      {name: 'اردبیل', code: '2'},
      {name: 'اصفهان', code: '3'},
      {name: 'البرز', code: '4'},
      {name: 'ایلام', code: '5'},
      {name: 'بوشهر', code: '6'},
      {name: 'تهران', code: '7'},
      {name: 'چهارمحال و بختیاری', code: '8'},
      {name: 'خراسان جنوبی', code: '9'},
      {name: 'خراسان رضوی', code: '10'},
      {name: 'خراسان شمالی', code: '11'},
      {name: 'خوزستان', code: '12'},
      {name: 'زنجان', code: '13'},
      {name: 'سمنان', code: '14'},
      {name: 'سیستان و بلوچستان', code: '15'},
      {name: 'فارس', code: '16'},
      {name: 'قزوین', code: '17'},
      {name: 'قم', code: '18'},
      {name: 'گلستان', code: '19'},
      {name: 'گیلان', code: '20'},
      {name: 'لرستان', code: '21'},
      {name: 'مازنداران', code: '22'},
      {name: 'مرکزی', code: '23'},
      {name: 'هرمزگان', code: '24'},
      {name: 'همدان', code: '25'},
      {name: 'کردستان', code: '26'},
      {name: 'کرمان', code: '27'},
      {name: 'کرمانشاه', code: '28'},
      {name: 'کهگیلویه و بویراحمد', code: '29'},
      {name: 'یزد', code: '30'},
    ];

  }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          image: new FormControl(['']),
        }),
        this._formBuilder.group({
          firstName: new FormControl(['']),
          lastName: new FormControl(['']),
          mobile: new FormControl(['']),
          phone: new FormControl(['']),
          state: new FormControl(['']),
          city: new FormControl(['']),
          postalCode: new FormControl(['']),
          plaque: new FormControl(['']),
          address: new FormControl(['']),
        }),
        this._formBuilder.group({
          typePost: new FormControl(['']),
          pricePost: new FormControl(['']),

        }),
        this._formBuilder.group({
          offerPercent: new FormControl(['']),

        }),
        this._formBuilder.group({
          uploadFile: ['']
        }),
      ])
    });
    this.items = this.serviceCart.getItems();
    var sumPrice = 0;
    for (var i = 0; i < this.items.length; i++) {
      sumPrice += (this.items[i]['product']['cartList'].price) * (this.items[i]['product'].number)

    }
    this.sumPrice = sumPrice;
  }

  onRegister() {
    this.servicelayout.registerUser(this.userInfo).subscribe((response) => {
      console.log(response);
    })
    // this.userInfo.city = this.selectedCity.name.toString();
    console.log(this.userInfo)
  }

}
