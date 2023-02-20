import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorService } from "./auth/auth/auth-itnerceptor.service";
import { RecipeService } from "./recipes/recipe.service";
import { ShoppingListService } from "./shopping-list/Shopping-list.service";

@NgModule({
    // providers: [
    //     ShoppingListService,
    //     RecipeService,
    //     {
    //         provide: HTTP_INTERCEPTORS,
    //         useClass: AuthInterceptorService,
    //         multi: true
    //     }
    // ]  use core module if we dont use providedIn in the services
})
export class CoreModule { }