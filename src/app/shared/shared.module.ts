import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AlertComponent } from "./alert/alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner/loading-spinner.component";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";

@NgModule({
    declarations: [
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        DropdownDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        DropdownDirective,
        CommonModule
    ],
    providers: []
})
export class SharedModule {}