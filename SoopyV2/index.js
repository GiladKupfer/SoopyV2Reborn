

// index.js 

import { gcwTest, registerGCWClearCommand, registerGCWCommand } from './features/waypoints/gcw.js';
import NonPooledThread from "./utils/nonPooledThread.js";
require("./features/specialMining/chestDrawing.js");
require("./features/waypoints/gcw.js");

if (net.minecraftforge.fml.common.Loader.isModLoaded("soopyv2forge")) {
    new NonPooledThread(() => {
        while (!Java.type("me.soopyboo32.soopyv2forge.SoopyV2Forge").INSTANCE) {
            Thread.sleep(1000);
        }

        Java.type("me.soopyboo32.soopyv2forge.SoopyV2Forge").INSTANCE.soopyIsInstalled();
    }).start();
}

class SoopyAddons {
    constructor() {
        this.FeatureManager = require("./featureClass/featureManager.js");

        this.FeatureManager.parent = this;
    }
}

gcwTest();
registerGCWCommand();
registerGCWClearCommand();

let a = register("worldLoad", () => {
    new SoopyAddons;

    a.unregister();
});