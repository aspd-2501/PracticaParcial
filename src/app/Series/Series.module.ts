import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './Series.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { SerieService } from './serie.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SeriesComponent, SerieDetailComponent],
  exports: [SeriesComponent],
  providers: [SerieService]
})
export class SeriesModule { }
