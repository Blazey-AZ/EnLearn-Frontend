import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AccountServiceService } from 'src/app/_services/account-service.service';

@Component({
  selector: 'app-guesthome',
  templateUrl: './guesthome.component.html',
  styleUrls: ['./guesthome.component.scss']
})
export class GuesthomeComponent implements OnInit {

  itemsPerSlide = 4;
  itemsPerSlides = 3;
  singleSlideOffset = true;
  noWrap = true;
 
  slides = [
    {image: 'https://santhigiricollege.ac.in/assets/uploads/gallery/CoverPhoto/17.jpg'},
    {image: 'https://santhigiricollege.ac.in/assets/uploads/gallery/Photos/139.jpg'},
    {image: 'https://santhigiricollege.ac.in/assets/uploads/gallery/Photos/167.jpg'},
    {image: 'https://santhigiricollege.ac.in/assets/uploads/gallery/Photos/165.jpg'},
    {image: 'https://santhigiricollege.ac.in/assets/uploads/gallery/CoverPhoto/1.jpg'},
    {image: 'https://santhigiricollege.ac.in/assets/uploads/gallery/CoverPhoto/5.jpg'},
    {image: 'https://santhigiricollege.ac.in/assets/uploads/gallery/CoverPhoto/13.jpg'},
    {image: 'https://santhigiricollege.ac.in/assets/uploads/gallery/CoverPhoto/16.jpg'},
    {image: 'https://santhigiricollege.ac.in/assets/uploads/gallery/CoverPhoto/14.jpg'},
    {image: 'https://santhigiricollege.ac.in/assets/uploads/gallery/CoverPhoto/7.jpg'},

  ];
  recruiters = [
    {image: 'https://s3.us-east-1.amazonaws.com/cdn.designcrowd.com/blog/Top-25-Most-Famous-Esports-Team-Logos/Team-Liquid.png'},
    {image: 'https://s3.us-east-1.amazonaws.com/cdn.designcrowd.com/blog/Top-25-Most-Famous-Esports-Team-Logos/Cloud-9.png'},
    {image: 'https://s3.us-east-1.amazonaws.com/cdn.designcrowd.com/blog/Top-25-Most-Famous-Esports-Team-Logos/Evil-Geniuses.png'},
    {image: 'https://s3.us-east-1.amazonaws.com/cdn.designcrowd.com/blog/Top-25-Most-Famous-Esports-Team-Logos/Virtus-Pro.png'},
    {image: 'https://s3.us-east-1.amazonaws.com/cdn.designcrowd.com/blog/Top-25-Most-Famous-Esports-Team-Logos/Fnatic.png'},
    {image: 'https://s3.us-east-1.amazonaws.com/cdn.designcrowd.com/blog/Top-25-Most-Famous-Esports-Team-Logos/FaZe-Clan.png'},

   
  ]

  constructor( public accountService : AccountServiceService, private primengconfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengconfig.ripple = true;
  }

  logout(){
    this.accountService.newlogout();
  }

}
