import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  itemsPerSlide = 3;

  slides = [
    { image: 'https://santhigiricollege.ac.in/assets/uploads/Placed%20Students/Sreeram%20P%20Das_a8162ae6-2302-430c-ae7c-e03b487c6e26.JPG', data: 'SRM Principal]' },
    { image: 'https://santhigiricollege.ac.in/assets/uploads/Placed%20Students/Alen%20Geo%20Alex_746f1737-3a93-47f4-a141-9f9b563e66e8.JPEG', data: 'AlenG [Vice Principal]' },
    { image: 'https://santhigiricollege.ac.in/assets/uploads/Placed%20Students/Govind%20C%20Pillai_cc7599dd-0d68-469f-bee1-865dfc797843.JPG', data: 'GCP [WoLoLP]' },
    { image: 'https://santhigiricollege.ac.in/assets/uploads/Placed%20Students/Prithiwiraj%20Prakash_662d9faa-31b9-4e23-9f19-d49cd3d71efa.JPG', data: 'Prithwiraj [Pro]' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
