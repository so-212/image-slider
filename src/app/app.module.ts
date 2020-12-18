import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//routing
import { RouterModule } from '@angular/router';




import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskInputComponent } from './task-input/task-input.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TaskList2Component } from './task-list2/task-list2.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DemoFormSkuComponentComponent } from './demo-form-sku-component/demo-form-sku-component.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NgFormComponent } from './ng-form/ng-form.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNoteFoundComponent } from './page-note-found/page-note-found.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

import { MatCarouselModule } from '@ngmodule/material-carousel';
import { ImageSliderComponent } from './image-slider/image-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskInputComponent,
    TaskList2Component,
    DemoFormSkuComponentComponent,
    ContactFormComponent,
    NgFormComponent,
    CrisisListComponent,
    HeroesListComponent,
    PageNoteFoundComponent,
    MyDialogComponent,
    ImageSliderComponent
  ],
  entryComponents: [
    MyDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    DragDropModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    RouterModule.forRoot([

      {path: 'crisis-list' , component: CrisisListComponent },
      {path: 'heroes-list' , component: HeroesListComponent},
      {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
      {path: '**', component: PageNoteFoundComponent}

    ]),
    MatCarouselModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
