import {Component} from '@angular/core';
import { LoggerService } from '@my/logger-lib';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private logger: LoggerService) {
    logger.debug('Manfred was here!');
  }

}

