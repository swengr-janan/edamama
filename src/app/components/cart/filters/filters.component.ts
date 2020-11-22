import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Subject, throwError} from "rxjs";
import {map, debounceTime, distinctUntilChanged, switchMap, catchError, retry, retryWhen} from "rxjs/operators"
import {SearchService} from "../../../services/search.service";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor(private searchService: SearchService) { }


  public loading: boolean;
  public searchTerm =  new Subject<string>();
  public searchResults: any;
  public paginationElements: any;
  public errorMessage: any;

  public searchForm = new FormGroup({
    search: new FormControl("", Validators.required),
  });

  public search(){
    this.searchTerm.pipe(
      map((e: any) => {
        console.log(e.target.value);
        return e.target.value;
      }),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term => {
        this.loading = true;
        return this.searchService._searchEntries(term);
      }),
      catchError((e) => {
        console.log(e);
        this.loading = false;
        this.errorMessage = e.message;
        return throwError(e);
      }),
    ).subscribe(v => {
      this.loading = false;
      this.searchResults = v;
      this.paginationElements = this.searchResults;
    })
  }

  ngOnInit(): void {
    this.search();
  }

}
