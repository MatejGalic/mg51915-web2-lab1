import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ScoreboardPageComponent } from './pages/scoreboard-page/scoreboard-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'matches',
  },
  {
    path: 'matches',
    component: HomepageComponent,
  },
  {
    path: 'scoreboard',
    component: ScoreboardPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
