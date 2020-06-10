// Set constraints for the video stream
var constraints = { video: { facingMode: "user" }, audio: false };
// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger")
// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
        track = stream.getTracks()[0];
        cameraView.srcObject = stream;
    })
    .catch(function(error) {
        console.error("Oops. Something is broken.", error);
    });
}
// Take a picture when cameraTrigger is tapped
cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
};
// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);

import com.banuba.sdk.manager.BanubaSdkManager;

public class MainActivity extends Activity {
    private BanubaSdkManager banubaSdk;

    @Override
    public void onCreate(Bundle state) {
        super.onCreate(state);
        setContentView(R.layout.activity_main);

        banubaSdk = new BanubaSdkManager(this, Pair.create(720, 1280), this);

        final SurfaceView sv = findViewById(R.id.activity_main_surface_view);
        banubaSdk.onCreate(sv);
    }

    @Override
    protected void onPause() {
        super.onPause();
        banubaSdk.onPause();
    }

    @Override
    protected void onResume() {
        super.onResume();
        banubaSdk.onResume();
    }

    @Override
    protected void onStart() {
        super.onStart();
        banubaSdk.onStart();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        banubaSdk.onDestroy();
