import { BannerImgApiService } from './../../services/banner-img-api.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ibanner } from '../../models/ibanner';
import { Banner } from '../../models/Banner';

@Component({
  selector: 'app-image-banner',
  standalone: true,
  imports: [],
  templateUrl: './image-banner.component.html',
  styleUrl: './image-banner.component.css'
})
export class ImageBannerComponent implements OnInit {
  Banner: any;
  constructor(private bannerServices:BannerImgApiService) {  
  }
  
  ngOnInit(): void {
    this.bannerServices.getAll().subscribe({
      next:(response)=>{  this.Banner=response}
    })
  }
}
