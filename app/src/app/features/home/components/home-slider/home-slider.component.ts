import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {

  @Input() images!: Array<Object>;

  constructor() { }

  ngOnInit(): void {
  }

}
