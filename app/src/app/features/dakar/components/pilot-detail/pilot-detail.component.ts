import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DakarService } from '../../services/dakar.service';

@Component({
  selector: 'app-pilot-detail',
  templateUrl: './pilot-detail.component.html',
  styleUrls: ['./pilot-detail.component.scss']
})
export class PilotDetailComponent implements OnInit {
  
  pilot: any;
  
  constructor(
    private route: ActivatedRoute, 
    public dakarService: DakarService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const pilotId = params.get('pilotId')
      
      this.dakarService
        .getPilot(pilotId)
        .subscribe((data) => {
          console.log(data)
          this.pilot = data;
        })
    })
  }

}
