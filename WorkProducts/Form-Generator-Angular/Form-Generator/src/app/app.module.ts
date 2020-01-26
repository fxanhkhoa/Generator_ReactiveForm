import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
/* Router */
import {RouterModule, Routes} from '@angular/router';

/** Reactive Form */
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
/* Component */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Angular Material */
import { MatSliderModule } from '@angular/material/slider';
import { GenerateFormComponent } from './generate-form/generate-form.component';
import { MatGridListModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatOptionModule, MatSelectModule, MatButtonModule } from '@angular/material';
import { MatTabsModule, MatIconModule, MatChipsModule, MatRadioModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';

/** Drag Drop Module */
import { DragDropModule } from '@angular/cdk/drag-drop';

import { FieldInputComponent } from './field-input/field-input.component';
import { FieldSelectComponent } from './field-select/field-select.component';
import { FieldRadioComponent } from './field-radio/field-radio.component';
import { FieldCheckboxComponent } from './field-checkbox/field-checkbox.component';

/* define Route */
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'generate-form', component: GenerateFormComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    GenerateFormComponent,
    FieldInputComponent,
    FieldSelectComponent,
    FieldRadioComponent,
    FieldCheckboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,
    DragDropModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule, 
    MatSelectModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatChipsModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    FieldInputComponent, 
    FieldSelectComponent, 
    FieldRadioComponent,
    FieldCheckboxComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
