

abstract class TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string
    ){}

    abstract getSepia(): void
    getReelTime():number {
        // some complex calculation
        return 8 
    }
}


class Instagram extends TakePhoto{
    constructor(
        public CameraMode:string,
        public filter:string,
        public burst:number,
    ){
        super(CameraMode, filter);
    }
    
    getSepia(): void {
        console.log("Sepia");
    }
}
    const Anup = new Instagram("test", "test",1);

    Anup.getReelTime();