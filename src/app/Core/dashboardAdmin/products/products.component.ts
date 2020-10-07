import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MessageService} from "primeng/api";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AdminserviceService} from "../adminservice.service";
import {ProductModel} from "../Product.model";

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [MessageService]
})
export class ProductsComponent implements OnInit {
  @ViewChild('epltable', {static: false}) epltable: ElementRef;
  public formGroup: FormGroup;
  public formGroupProduct: FormGroup;
  cities: City[];
  product = {
    title: '',
    type: '',
    price: '',
    count: '',
    detail: '',
    viewCount: '',
    date: '',
    time: '',
    image: ''
  }
  productModel: ProductModel[];
  cols: any[];

  constructor(private  fb: FormBuilder, private service: AdminserviceService, private messageService: MessageService) {
    this.cities = [
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
    this.formGroupProduct = this.fb.group({
      title: new FormControl(['']),
      type: new FormControl(['']),
      price: new FormControl(['']),
      count: new FormControl(['']),
      viewCount: new FormControl(['']),
      detail: new FormControl(['']),
      date: new FormControl(['']),
    });

    this.formGroup = this.fb.group({
      username: new FormControl(['']),
      password: new FormControl(['']),
      role: new FormControl(['']),
      schoolID: new FormControl(['']),
      schoolName: new FormControl(['']),
      adminName: new FormControl(['']),
      // image: new FormControl(['']),
    });
    this.service.onDisplayProduct().subscribe((response) => {
      if (response['success'] === true) {
        this.productModel = response['data'];
      }
    })
  }
  onUpload(event) {
    const formData = new FormData();
    for (let i = 0; i < event.files.length; i++) {
      formData.append('image', event.files[i], event.files[i]['name']);
    }
    this.service.uploadFile(formData).subscribe((response) => {
      if (response['success'] === true) {
        this.product.image = response['imagePath'];
      } else {
        console.log(response);
      }
    });
  }
  onRegisterProduct() {
    this.service.onRegisterProduct(this.product).subscribe((response) => {
      if (response['success'] == true) {
        this.messageService.add({severity: 'success', summary: 'مدیر ', detail: 'محصول با موفقیت ثبت شد'});

      }
    })
  }
}
