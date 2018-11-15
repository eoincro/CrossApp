import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule, MatDatepickerModule, MatNativeDateModule, MAT_DATE_LOCALE, MatCheckboxModule, MatSidenavModule, MatToolbarModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}],
  exports:  [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule]
})
export class MaterialModule {
}
