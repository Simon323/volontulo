import { Component, OnInit } from '@angular/core';
import { OrganizationsService } from './organizations.service';
import { Organization } from '../organization/organization.model';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css'],
  providers: [OrganizationsService]
})
export class OrganizationsComponent implements OnInit {
  organizations: Array<Organization> = [];

  constructor(private organizationsService: OrganizationsService) { }

  ngOnInit() {
    this.organizationsService.getOrganizations()
      .subscribe(
        organizations => {
          this.organizations = organizations;
        }
      );
  }
}
