import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class OrganizationsService {
  private url = `${environment.apiRoot}/organizations/`

  constructor(private http: Http) { }

  getOrganizations() {
    return this.http.get(this.url, { withCredentials: true } )
      .map((res: Response) => res.json())
  }
}
