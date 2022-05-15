import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  heroImages: Array<Object> = [
    {
      image: 'https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2022/01/14/1600/800/dd658e4d45cf8104e2b82762e64dfa98.jpg?mod=v1_b288a2e61cd79e75fb3b3986b54838d5',
      thumbImage: 'https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2022/01/14/1600/800/dd658e4d45cf8104e2b82762e64dfa98.jpg?mod=v1_b288a2e61cd79e75fb3b3986b54838d5'
    }, 
    {
      image: 'https://enduro21.com/images/2022/january-2022/22-dakar-stage-1/daniel-sanders_dakar-rally-2022-stage1_0583.jpg',
      thumbImage: 'https://enduro21.com/images/2022/january-2022/22-dakar-stage-1/daniel-sanders_dakar-rally-2022-stage1_0583.jpg'
    }, 
    {
      image: 'https://valauto.es/wp-content/uploads/Dakar-2020_Renault-Tucks-1_Sherpa-Mammoet.jpg',
      thumbImage: 'https://valauto.es/wp-content/uploads/Dakar-2020_Renault-Tucks-1_Sherpa-Mammoet.jpg',
    },
    {
      image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/minis-spanish-driver-laia-sanz-and-co-driver-murizio-gerini-news-photo-1641373032.jpg',
      thumbImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/minis-spanish-driver-laia-sanz-and-co-driver-murizio-gerini-news-photo-1641373032.jpg',
    }, 
    {
      image: 'https://i0.wp.com/automundo.com.ar/wp-content/uploads/2022/01/Italo-Pedemonte.jpg?w=1200&ssl=1',
      thumbImage: 'https://i0.wp.com/automundo.com.ar/wp-content/uploads/2022/01/Italo-Pedemonte.jpg?w=1200&ssl=1'
    }, 
    {
      image: 'https://s1.eestatic.com/2021/11/30/deportes/motor/631197101_216756144_1706x960.jpg',
      thumbImage: 'https://s1.eestatic.com/2021/11/30/deportes/motor/631197101_216756144_1706x960.jpg',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
