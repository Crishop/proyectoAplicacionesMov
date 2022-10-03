import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { LogoutButtonComponent } from "./logout-button/logout-button.component";

@NgModule ({
    declarations: [
        LogoutButtonComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule
    ],
    exports: [
        LogoutButtonComponent
    ]
})

export class ComponentsModule {}