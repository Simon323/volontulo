import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import { OrganizationsComponent } from './organizations.component';
import { OrganizationsService } from './organizations.service';
import { OrganizationService } from '../organization/organization.service';

describe('OrganizationsComponent', () => {
  let component: OrganizationsComponent;
  let fixture: ComponentFixture<OrganizationsComponent>;
  let organizationsService: OrganizationsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationsComponent ],
      providers: [
        {
          provide: OrganizationsService,
          useValue: { 
            getOrganizations: jasmine.createSpy('getOrganizations')//,
            //  getOrganizations: new Subject<Organization[]>();
          },
        },
        {
          provide: OrganizationService,
          useValue: {
          },
        }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(inject([OrganizationsService], (_organizationsService) => {
    organizationsService = _organizationsService;

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the list of organizations', () => {
    // organizationsService.getOrganizations.and.returnValue(Observable.of([]));
    // organizationsService.getOrganizations.next([])
    fixture.detectChanges();

    // fixture.debugElement.queryAll(by.css('.organization'));

    expect(organizationsService.getOrganizations).toHaveBeenCalled();

  })
});
