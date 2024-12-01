"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 8;
    }
}
class Instagram extends TakePhoto {
    constructor(CameraMode, filter, burst) {
        super(CameraMode, filter);
        this.CameraMode = CameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const Anup = new Instagram("test", "test", 1);
Anup.getReelTime();
//# sourceMappingURL=abstractClasses.js.map