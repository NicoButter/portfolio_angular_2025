import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      NgCircleProgressModule.forRoot({
        radius: 80,
        outerStrokeWidth: 8,
        innerStrokeWidth: 5,
        outerStrokeColor: "#FFBF00",
        innerStrokeColor: "#808080",
        animation: true,
        animationDuration: 750,
        showImage: true,
        showUnits: false,
        showTitle: false,
      }),
    ),
    ...appConfig.providers,
  ]
}).catch((err) => console.error(err));
