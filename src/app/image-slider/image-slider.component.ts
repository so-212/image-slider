import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

  slides = [{ 'image': '../assets/img/ben-warren-X_QKVdMtDNI-unsplash.jpg' },
  { 'image': '../assets/img/bernardo-lorena-ponte-0F3Yp4XEq4w-unsplash.jpg' },
  { 'image': '../assets/img/fernando-paredes-murillo-yWbxfKurMH0-unsplash.jpg' },
  { 'image': '../assets/img/omer-salom--Djvg5Bpyqs-unsplash.jpg' },
  { 'image': '../assets/img/photoholgic-uxr5mXKJxmA-unsplash.jpg' },
  { 'image': '../assets/img/photoholgic-uxr5mXKJxmA-unsplash.jpg' }];

  
  constructor() { }

  ngOnInit(): void {
  }

}
