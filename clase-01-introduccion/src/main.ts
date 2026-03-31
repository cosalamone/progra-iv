import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig) // es lo que arranca toda la aplicación. 
  .catch((err) => console.error(err));
