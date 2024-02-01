import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { StudentCreateComponent } from "./components/student-create/student-create.component";
import { ReadComponent } from "./components/read/read.component";
import { StudentEditComponent } from "./components/student-edit/student-edit.component";

const routes: Routes = [
  { path: "", component: HomeComponent, title: 'Home-Page' },
  { path: "create", component: StudentCreateComponent, title: 'Student Create' },
  { path: "read", component: ReadComponent, title: 'Student Data' },
  { path: "students/:id/update", component: StudentEditComponent, title: 'Update Record' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})

export class AppRoutingModule {}