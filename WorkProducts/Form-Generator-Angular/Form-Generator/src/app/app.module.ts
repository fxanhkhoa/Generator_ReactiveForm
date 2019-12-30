import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

/** Drag Drop Module */
import { DragDropModule } from '@angular/cdk/drag-drop';

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
    GenerateFormComponent
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
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
