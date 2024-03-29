import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';

@NgModule({
    imports: [
        RouterModule, // for router-outlet
        //CommonModule, for *ngIf, *ngFor..
        ReactiveFormsModule,
        RecipesRoutingModule,
        SharedModule
    ],
    exports: [], // no need to export recipe components, since we don't use them in the app module 
    declarations: [
        RecipeDetailComponent,
        RecipeEditComponent,
        RecipeItemComponent,
        RecipeListComponent,
        RecipeStartComponent,
        RecipesComponent
    ], 
    providers: [],
})
export class RecipesModule {}