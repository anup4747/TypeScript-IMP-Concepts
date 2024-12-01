// Define an abstract class called TakePhoto
abstract class TakePhoto {
    // The constructor initializes the class with two properties: cameraMode and filter
    constructor(
        public cameraMode: string,   // Public property for camera mode (e.g., photo, video)
        public filter: string        // Public property for the applied filter (e.g., sepia, black-and-white)
    ) {}

    // Abstract method getSepia, which must be implemented by any subclass
    abstract getSepia(): void;

    // Regular method that returns the time for a reel (e.g., video length)
    getReelTime(): number {
        // Some complex calculation to determine reel time (simplified here)
        return 8;  // Returns a constant value of 8 (could be a dynamic calculation)
    }
}

// Define a class called Instagram that extends the TakePhoto class
class Instagram extends TakePhoto {
    // The constructor initializes the class with cameraMode, filter, and burst properties
    constructor(
        public CameraMode: string,   // Public property for camera mode (e.g., photo, video)
        public filter: string,       // Public property for the applied filter (e.g., sepia, black-and-white)
        public burst: number         // Public property for the burst mode (e.g., number of photos in a burst)
    ) {
        super(CameraMode, filter);   // Call the parent class constructor with CameraMode and filter values
    }
    
    // Implement the abstract method from the parent class
    getSepia(): void {
        // This method logs "Sepia" to the console when called
        console.log("Sepia");
    }
}

// Create a new instance of the Instagram class
const Anup = new Instagram("test", "test", 1);

// Call the getReelTime method from the parent class TakePhoto (which returns 8)
Anup.getReelTime();
