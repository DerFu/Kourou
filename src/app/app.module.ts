import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CrewState } from './app.state';
import { RocketModule } from './rocket/rocket.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    RocketModule,
    NgxsModule.forRoot([CrewState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
