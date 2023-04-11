import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WorkoutsComponent } from './workouts/workouts/workouts.component';
import { MusclemapComponent } from './musclemap/musclemap/musclemap.component';
import { WorkoutListComponent } from './workouts/workout-list/workout-list/workout-list.component';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { WorkoutEditComponent } from './workouts/workout-edit/workout-edit/workout-edit.component';
import { WorkoutCreateComponent } from './workouts/workout-create/workout-create/workout-create.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutsComponent,
    MusclemapComponent,
    WorkoutListComponent,
    CalendarComponent,
    WorkoutEditComponent,
    WorkoutCreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
