import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular";
import { Sound } from "@synerty/peek-util";
export declare class PeekModuleFactory {
    /**
     * Provide a cross platform Browser module
     */
    static readonly FormsModules: (typeof NativeScriptModule)[];
    /**
     * Provide a cross platform Router module
     */
    static readonly RouterModule: typeof NativeScriptRouterModule;
    /**
     * Create a new sound object, that can be played.
     */
    static createSound(soundFilePath: string): Sound;
}
