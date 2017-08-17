
class TiMap {

    constructor ( selector, icon ) {

        this._selector = selector;
        this._map;
        this._routes = [];
        this._icon = '';
        this._dragging = false;
        this._currentIndex = (-1);
        this._mobile = false;
        this._markerArray = [];

        // Public functions

        this.makeMarkerActive = (id) => {

            $('.marker').removeClass('active');
            $(`.markerId${id}`).addClass('active');

        }

        this.detectMobile = () => {

            if ($(window).width() <= 480) {
                return true;
            } else {
                return false;
            }

        }

    }

    // Private functions

    init() { // Initialize map

        this._map = new google.maps.Map(document.getElementById(this._selector), {

            center: {lat: 52.748592, lng: -7.154896},
            zoom: 7,
            styles: mapStyles, // scripts/mapStyles.js
            minZoom: 7,
            mapTypeControl: false,
            streetViewControl: false,
            zoomControl: false
        });

        let zoomControlDiv = document.createElement('div');
        zoomControlDiv.id = 'hello';

        zoomControlDiv.index = 1;
        this._map.controls[google.maps.ControlPosition.TOP_LEFT].push(zoomControlDiv);

        let zoomControl = new ZoomControl(zoomControlDiv, this._map);

        this.getRoutes(routes); // scripts/routes.js

        //this.resizeForMobile();

        $(window).on('resize', () =>{

            //this.resizeForMobile();

        });

        $('.close').on('click', () => {
            tiNav1.closeSlider();
        });

        google.maps.event.addListener(this._map, 'dragstart', function() {

            // Hide infobox on map drag
            this._dragging = true;

        });

        google.maps.event.addListener(this._map, 'zoom_changed', function() {

            // Hide infobox on map zoom

        });

        google.maps.event.addListenerOnce(this._map, 'idle', function(){

            //loaded fully
            setTimeout(() => {

                $('.loader').fadeOut(300);

                $('.marker').each(function(index, e){
                    let self = $(this);
                    setTimeout(() => {
                        self.addClass('scale-me');
                    }, index * 100);
                });

            }, 600);
        });

    }

    getRoutes(routes) {

       this._routes = routes;
       this.addMarkers(this._routes);

    }

    resizeForMobile() {

        if ($(window).width() <= 480) {

            $(`#${this._selector}`).css('height', $(window).height() + 'px');

        }

    }

    updateInfoBox(data, marker, markerId) {

        let infoBox = $('.infobox-wrapper');
        // let image = `images/${markerId + 1}.jpg`;
        let image = `images/${markerId + 1}.jpg`;
        let delay = 300;

        if ( this.detectMobile() === true ) {
            delay = 600;
        }

        // Update info box content
        infoBox.find('#place').html(data.title);
        infoBox.find('#stage').html(markerId + 1);
        infoBox.find('#description').html(data.description);
        infoBox.find('#duration').html(data.duration);
        infoBox.find('#distance').html(data.distance)
        infoBox.find('#link').attr('href', data.link);
        // infoBox.find('#tourLink').attr('href', data.tourlink);


        // alert(infoBox.find('#place').html(data.title));

        // Check src exists
        var checkImage = (src, good, bad) => {

            var img = new Image();
            img.onload = good;
            img.onerror = bad;
            img. src = src;

        }

        // Check if image exists in folder and add relevant source, if not add placeholder
        checkImage( image, () => {
            infoBox.find('img').attr('src', image);
        },() => {
            infoBox.find('img').attr('src', 'http://placehold.it/222x140');
        });

        // Position info box to marker
        setTimeout(() => {

            infoBox.css({
                'position' : 'absolute',
                'display': 'block',
                'opacity': 1,
                'left': $(marker).offset().left - $('#skodaMap').offset().left - infoBox.width() / 2 + 17 + 'px',
                'top': $(marker).offset().top - $('#skodaMap').offset().top - infoBox.outerHeight() - 20 + 'px'
            });

        }, delay);

        $('.close-btn').on('click', (e) => {

            e.preventDefault();
            infoBox.css('left', -1000 + 'px');

        });


    }

    panToWithOffset(latlng, offsetX, offsetY) {

        let _map = this._map;
        let ov = new google.maps.OverlayView();

        ov.onAdd = function() {

            let proj = this.getProjection();
            let aPoint = proj.fromLatLngToContainerPixel(latlng);
            aPoint.x = aPoint.x+offsetX;
            aPoint.y = aPoint.y+offsetY;
            _map.panTo(proj.fromContainerPixelToLatLng(aPoint));

        };

        ov.draw = function() {};
        ov.setMap(_map);

    }

    addMarkers(routes) {

        let map = this._map;

        for ( let i = 0; i < routes.length; i++ ) {

            let route = routes[i];
            let LatLng = new google.maps.LatLng(route.lat, route.lng);

            //this._icon = 'images/marker.svg';
            this._icon = '/images/marker.svg';



            var tiMarker = new CustomMarker(

                LatLng,
                this._map,

                {
                    marker_id: i,
                    icon: this._icon,
                    place: route.title,
                    distance: route.distance,
                    duration: route.duration,
                    description: route.description,
                    link: route.link,
                    tourLink: route.tourLink
                }

            );

            this._markerArray.push(tiMarker);

        }

        // let clusterStyles =  [{
        //     anchorText: [2, -3],
        //     textColor: 'white',
        //     fontFamily: 'TelesansText-Regular',
        //     url: 'images/cluster-icon.svg',
        //     height: 81,
        //     width: 76
        // }];

        let clusterStyles =  [{
            anchorText: [2, -3],
            textColor: 'white',
            fontFamily: 'TelesansText-Regular',
            url: '/images/cluster-icon.svg',
            height: 81,
            width: 76
        }];

        let mcOptions = {
            gridSize: 50,
            styles: clusterStyles,
            maxZoom: 15
        };

        let markerCluster = '';

    }

}


