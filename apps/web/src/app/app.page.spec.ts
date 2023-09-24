import { TestBed } from "@angular/core/testing";
import { AppPage } from "./app.page";
import { RouterTestingModule } from "@angular/router/testing";


describe('AppPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppPage, RouterTestingModule],
    }).compileComponents();
  });

  it(`should have as title 'web'`, () => {
    const fixture = TestBed.createComponent(AppPage);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('web');
  });
});
