import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactBarComponent } from './contact-bar/contact-bar.component';

@NgModule({
    declarations: [NavBarComponent, ContactBarComponent,],
    providers: [],
    imports: [CommonModule,],
    exports: [NavBarComponent,ContactBarComponent,],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BaseComponentModule { }