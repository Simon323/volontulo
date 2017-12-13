import { Component, OnInit } from '@angular/core';
import { OrganizationsService } from './organizations.service';
import { Organization } from '../organization/organization.model';
import { OrganizationService } from '../organization/organization.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'volontulo-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css'],
})
export class OrganizationsComponent implements OnInit {
  public organizations$: Observable<Organization[]>;

  constructor(
    private organizationsService: OrganizationsService, 
    private organizationService: OrganizationService
  ) { }

  ngOnInit() {
    this.organizations$ = this.organizationsService.getOrganizations();
  }
  
  getOrganizationViewUrl(organization: Organization): string {
    return this.organizationService.getOrganizationViewUrl(organization);
  }
}
