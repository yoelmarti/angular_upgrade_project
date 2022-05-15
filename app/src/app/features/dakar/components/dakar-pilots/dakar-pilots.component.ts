import { Component, OnInit } from '@angular/core';
import { Ipilots } from '../../models/ipilots';
import { DakarService } from '../../services/dakar.service';

@Component({
  selector: 'app-dakar-pilots',
  templateUrl: './dakar-pilots.component.html',
  styleUrls: ['./dakar-pilots.component.scss']
})
export class DakarPilotsComponent implements OnInit {

  public pilotList?: Ipilots[] = []

  constructor(public dakarService: DakarService) { }

  ngOnInit(): void {
    this.dakarService.getDakarPilots().subscribe(data=>{
      this.pilotList = data
    })
  }

}
