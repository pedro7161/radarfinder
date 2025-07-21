import { Component, input } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-card',
  imports: [CardModule, ButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  public district = input<string>('');
  public street = input<string>('');
  public description = input<string>('');
  public image = input<string>('');
}
