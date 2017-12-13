import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Organization } from 'app/organization/organization.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrganizationsService {
  private url = `${environment.apiRoot}/organizations/`;

  constructor(private http: Http) { }

  getOrganizations(): Observable<Organization[]> {
    return this.http.get(this.url)
      .map((res: Response) => res.json());
  }
}
