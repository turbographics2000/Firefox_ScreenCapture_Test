applicationCapture.onclick = _ => cap('application');
windowCapture.onclick = _ => cap('window');
screenCapture.onclick = _ => cap('screen');

function cap(source) {
    navigator.mediaDevices.getUserMedia({
        video: {
            mediaSource: source
        }
    }).then(stream => {
        preview.srcObject = stream;
    });
}