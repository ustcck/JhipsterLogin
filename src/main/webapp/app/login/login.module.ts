import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LOGIN_ROUTE } from './login.route';
import { JhipsterLoginSharedLibsModule } from 'app/shared/shared-libs.module';

@NgModule({
  imports: [JhipsterLoginSharedLibsModule, RouterModule.forChild([LOGIN_ROUTE])],
  declarations: [LoginComponent]
})
export class JhipsterLoginLoginModule {}
