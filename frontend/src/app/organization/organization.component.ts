import { Component, OnInit, Input } from '@angular/core';
import { Organization } from './organization.model';

@Component({
  selector: 'volontulo-organization',
  templateUrl: './organization.component.html',
})
export class OrganizationComponent {
  @Input() organization: Organization;

  constructor() { }
}
