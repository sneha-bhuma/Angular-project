import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloComponent } from './hello.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelloComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check all properties of hello component', () => {
    // expect(component.classname).toEqual('text-danger');
    // expect(component.company).toEqual('Google');
    // expect(component.weekDay).toEqual('Mon');
    expect(component.myName).toEqual('Sneha');
    // expect(component.isDisabled).toEqual(false);
    // expect(component.message).toEqual('message will appear here...');
    expect(component.salary).toEqual(54354768);
   // expect(component.friendNames).toEqual(['Aman', 'Suresh', 'Neha', 'Jyothi']);
    
  });

});
