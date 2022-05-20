import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';

import { SerieService } from './serie.service';

@Component({
  selector: 'app-Series',
  templateUrl: './Series.component.html',
  styleUrls: ['./Series.component.css']
})
export class SeriesComponent implements OnInit {

   series: Array<Serie> = [];
   average = 0;

   selectedSerie!: Serie;
   selected = false;

  onSelected(serie: Serie): void
  {
    this.selected = true;
    this.selectedSerie = serie;
  }

  constructor(private serieService: SerieService) { }

  getSeriesList()
  {
    this.serieService.getSeries().subscribe(series => {
      series.forEach(serie => {
        this.average += serie.seasons;
      })
      this.average = this.average / series.length;
      this.series = series;});
  }



  ngOnInit() {
    this.getSeriesList()
  }

}
