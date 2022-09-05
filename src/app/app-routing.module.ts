import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreTableComponent } from './score-table/score-table.component';

const routes: Routes = [
  //{path: "", component: ScoreTableComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
