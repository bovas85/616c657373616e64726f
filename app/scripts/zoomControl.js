class ZoomControl {

    constructor(controlDiv, map) {
            // Creating divs & styles for custom zoom control
        controlDiv.style.padding = '5px';

        console.log('created zoom');

        // Set CSS for the control wrapper
        var controlWrapper = document.createElement('div');
        controlWrapper.style.cursor = 'pointer';
        controlWrapper.style.textAlign = 'center';
        controlWrapper.style.width = '32px';
        controlWrapper.style.height = '64px';
        controlWrapper.style.marginTop = '15px';
        controlWrapper.style.marginLeft = '15px';
        controlDiv.appendChild(controlWrapper);

        // Set CSS for the zoomIn
        var zoomInButton = document.createElement('div');
        zoomInButton.style.width = '32px';
        zoomInButton.style.height = '32px';
        zoomInButton.style.marginBottom = '7px';

        /* Change this to be the .png image you want to use */
        //zoomInButton.style.backgroundImage = 'url("images/zoom-plus.svg")';
        zoomInButton.style.backgroundImage = 'url("/images/zoom-plus.svg")';
        controlWrapper.appendChild(zoomInButton);

        // Set CSS for the zoomOut
        var zoomOutButton = document.createElement('div');
        zoomOutButton.style.width = '32px';
        zoomOutButton.style.height = '32px';
        /* Change this to be the .png image you want to use */
        //zoomOutButton.style.backgroundImage = 'url("images/zoom-minus.svg")';
        zoomOutButton.style.backgroundImage = 'url("/images/zoom-minus.svg")';
        controlWrapper.appendChild(zoomOutButton);

        // Setup the click event listener - zoomIn
        google.maps.event.addDomListener(zoomInButton, '', function() {});

        // Setup the click event listener - zoomOut
        google.maps.event.addDomListener(zoomOutButton, '', function() {});

    }

}
