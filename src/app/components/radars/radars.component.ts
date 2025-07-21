import { Component } from '@angular/core';
import { RadarService } from '../../services/radarlocator/radar.service';
import { CardComponent } from "../../shared/card/card.component";


@Component({
  selector: 'app-radars',
  imports: [CardComponent],
  templateUrl: './radars.component.html',
  styleUrl: './radars.component.scss'
})
export class RadarsComponent {
  radares: any[] = [];

  constructor(private radarService: RadarService) {}

  ngOnInit(): void {
    this.radarService.getRadares().subscribe(data => {
      this.radares = data.features;
    });

    console.log('Radares loaded:', this.radares);
  }
}
