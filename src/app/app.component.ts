import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  posts$!: Observable<any[]>;
  title = 'cold-observers';

  ngOnInit() {
    this.posts$ = this.http
      .get<any[]>(`https://jsonplaceholder.typicode.com/posts`)
      .pipe(shareReplay());
  }


  // if you look at network tab in developer tools you see without share replays we call apis twice one for showing data and one for count
}
