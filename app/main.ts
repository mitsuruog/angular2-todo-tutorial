import { bootstrap } from '@angular/platform-browser-dynamic';
import { Logger } from './common/services/logger.service';

import { AppComponent } from './app.component';

bootstrap(AppComponent, [Logger]);
