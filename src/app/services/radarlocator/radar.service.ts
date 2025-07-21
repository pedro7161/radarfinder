import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RadarService {

  private apiUrl = 'https://services.arcgis.com/1dSrzEWVQn5kHHyK/arcgis/rest/services/MOB_RadaresPaineis/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson';

  constructor(private http: HttpClient) {}

  getRadares(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}
