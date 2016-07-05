import {
  describe,
  it,
  inject,
  expect,
  addProviders
} from '@angular/core/testing';

import {Logger} from './common/services/logger.service';
import {AppComponent} from './app.component';

describe('Test: AppComponent', () => {

  beforeEach(() => {
    addProviders([AppComponent, Logger]);
  });

  it('AppComponentが存在すること', inject([AppComponent, Logger], (testee:AppComponent) => {
    expect(testee).toBeDefined();
  }));

});
