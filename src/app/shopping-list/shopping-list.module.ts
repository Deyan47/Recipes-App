import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared/shared.module";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";

@NgModule({
    imports: [
        FormsModule,
        RouterModule.forChild([
            { path: '', component: ShoppingListComponent },
        ]),
        SharedModule
    ],
    exports: [],
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    providers: [],
})
export class ShoppingListModule { }