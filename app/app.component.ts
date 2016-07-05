import { Component } from '@angular/core';
import { Logger } from './common/services/logger.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html',
  styleUrls: ['app/app.css'],
  providers: [Logger]
})

export class AppComponent {

  constructor(private logger:Logger) {
  }

  ngOnInit() {
    this.logger.log('Alo!! Alo!!');
  }

}
