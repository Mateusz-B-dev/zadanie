import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  item = 50;

  formContact = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phone: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    code: new FormControl('', Validators.required),
    rodo: new FormControl('', Validators.requiredTrue)

  });

  title = 'zadanie';

  constructor() { }

  ngOnInit(): void {

  }


  sendMoney(item): void {
    switch (item.id) {
      case 'btnradio1':
        this.item = 50;
        break;
      case 'btnradio2':
        this.item = 70;
        break;
      case 'btnradio3':
        this.item = 100;
        break;
    }
    console.log(this.formContact.value);
    console.log(this.item);
  }
}
