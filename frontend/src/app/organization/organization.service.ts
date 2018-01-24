import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { Organization } from './organization.model';

@Injectable()
export class OrganizationService {
  url = `${environment.apiRoot}/organizations`;
  requestOptions = { withCredentials: true };

  constructor(private http: Http) {
  }

  getOrganization(id: number): Observable<Organization> {
    return this.http.get(`${this.url}/${id}/`, this.requestOptions).map(response => response.json());
  }

  getOrganizationViewUrl(organization: Organization): string {
    return `${environment.djangoRoot}/organizations/${organization.slug}/${organization.id}`;
  }

  getOrganizationCreateViewUrl(): string {
    return `${environment.djangoRoot}/organizations/create`;
  }

  getOrganizations(): Observable<Organization[]> {
    return this.http.get(this.url)
      .map((res: Response) => res.json());
  }
}
