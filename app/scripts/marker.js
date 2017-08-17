
class CustomMarker {

    constructor(latlng, map, args) {

        this.latlng = latlng;
        this.args = args;
        this.setMap(map);

        this.draw = () => {

            var self = this;
            var div = this.div;
            var span;

            if (!div) {

                div = this.div = document.createElement('div');
                span = document.createElement('span');
                span.style.display = 'block';
                div.style.position = 'absolute';
                div.style.cursor = 'pointer';

                // Attach our map location fields to the markers for data manipulation

                if (typeof (self.args.marker_id) !== 'undefined') {

                    $(div).data('marker', self.args.marker_id);
                    $(div).data('latlng', this.latlng);
                    $(div).data('distance', self.args.distance);
                    $(div).data('description', self.args.description);
                    $(div).data('duration', self.args.duration);
                    $(div).data('place', self.args.title);
                    $(div).data('link', self.args.link);
                    $(div).data('tourlink', self.args.tourLink);
                    $(div).addClass('marker markerId' + self.args.marker_id);

                }

                if ( typeof (self.args.icon) !== 'undefined' ) {

                    $(div).css({
                        'background' : 'url('+ self.args.icon +') no-repeat center center'
                    });

                    /* Create an inline svg element and append it to the marker div */

                    var xhr = new XMLHttpRequest;
                    xhr.open('get', self.args.icon, true);
                    xhr.onreadystatechange = function(){

                    if (xhr.readyState != 4) return;

                        var svg = xhr.responseXML.documentElement;
                        svg = document.importNode(svg,true); // surprisingly optional in these browsers
                        document.body.appendChild(svg);

                        $(div).append(svg);

                    };

                    xhr.send();

                }

                // Marker click functionality

                google.maps.event.addDomListener(div, 'click', function (event) {

                    let lat = $(this).data('latlng').lat();
                    let lng = $(this).data('latlng').lng();
                    let latlng = new google.maps.LatLng(lat, lng);
                    let data = $(this).data();

                    google.maps.event.trigger(self, 'click');
                    tiMap1._currentIndex = $(this).data('marker');
                    tiNav1.goToNavSlide($(this).data('marker'));

                    setTimeout(() => {
                        tiNav1.showSlider();
                    }, 500);

                    ga('send', 'event', 'click', 'map pin', `pin ${$(this).data('place')}`);

                    // _satellite.setVar('map', `pin ${$(this).data('place')}`); // Comment out if not in AEM env
                    // _satellite.track('sparkmapevent');

                });

                var panes = this.getPanes();
                panes.overlayImage.appendChild(div);

            }

            var point = this.getProjection().fromLatLngToDivPixel(this.latlng);

            if (point) {
                div.style.left = point.x - 0 + 'px';
                div.style.top = point.y - 0 + 'px';
            }
        };

        this.remove = () => {

            if (this.div) {
                this.div.parentNode.removeChild(this.div);
                this.div = null;
            }

        }

        this.getPosition = () => {
            return this.latlng;
        }

        this.getDraggable = () => { // Needed to stop markerCluster from breaking
             return false;
        };

    }


}

CustomMarker.prototype = new google.maps.OverlayView();
