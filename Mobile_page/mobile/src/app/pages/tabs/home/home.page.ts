import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],  
})
export class HomePage implements OnInit {
swiperModules= [IonicSlides] 
st: any;
recent: any[] = [];
loja: any;

  constructor() {}

  ngOnInit() {
    this.recent = [
      { id: 4, company: 'Banho e tosa', location: 'New Delhi', expires_on: '30/11/23', post: 'APPET', type: '', salary: '$40-90k/year', logo_dark: 'Appet.png.jpg', logo_light: 'Appet.png.jpg' },
      { id: 2, company: 'Casa de Ração', location: 'Bangalore', expires_on: '07/12/23', post: 'Casa de ração 2 Irmão', type: '', salary: '$30-80k/year', logo_dark: 'bicho_mimado.jpg', logo_light: 'bicho_mimado.jpg' },
      { id: 3, company: 'pet shop', location: 'Mumbai', expires_on: '15/12/23', post: 'PetShop 24 horas', type: '24 horas', salary: '$30-70k/year', logo_dark: 'pet shopes.jpg', logo_light: 'linkedin_light.png' },
    ];
  }


}
