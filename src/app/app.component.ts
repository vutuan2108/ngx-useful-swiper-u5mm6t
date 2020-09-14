import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 20,
    // số hiển thị trên 1 khung slide
     slidesPerView:2,
    // số slide 1 group
    slidesPerGroup:2,
    // kiểu hiển thị
    slidesPerColumnFill: 'row',
    // số cọt
    slidesPerColumn:2,
    breakpoints: {
      // trên 1024
      1366:{
        slidesPerView: 5,
        slidesPerGroup: 5,
        slidesPerColumnFill: 'row',
        // số cọt
        slidesPerColumn:2,
      },
      // từ 960 tới 1366
      960: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        slidesPerColumnFill: 'row',
        // số cọt
        slidesPerColumn:2,
      }
      
    }
  };
}
