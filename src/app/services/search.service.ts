import { Injectable, ɵEMPTY_ARRAY } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of, empty} from "rxjs";
import {map} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { 

  }

  public baseUrl = "http://localhost:3000/products";
  public searchResults: any;

  public searchEntries(term): Observable<any>{
    if(term === ""){
      console.log("Not defined!")
      return of(null);
    }else{
      let params = {q: term}
      return this.httpClient.get(this.baseUrl, {params}).pipe(
        map(response => {
          console.log(response);
          return this.searchResults = response["items"];

        })
      )
    }
  }

  public _searchEntries(term){
    return this.searchEntries(term);
  }

}
