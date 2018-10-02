import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthenticationRoutes } from './authentication.routing';
import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { ForgotComponent } from './forgot/forgot.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
    imports: [
      RouterModule.forChild(AuthenticationRoutes),
      FormsModule,
      MaterialModule,
      FlexLayoutModule,
    ],
    declarations: [SigninComponent, ForgotComponent]
})
export class AuthenticationModule {}
