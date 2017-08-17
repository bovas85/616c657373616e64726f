
class TiNav {

    constructor ( selector ) {

        this._selector = selector;
        this._element;
        this.route = [];
        this.currentIndex = 1;

        // Public functions

        this.makeMarkerActive = (id) => {

            $('#tiMap ul li').removeClass('active');
            $(`a [data-marker="${id}"]`).addClass('active');

        }

    }

    // Private functions

    init() { // Initialize nav

        this._element = $(this._selector);
        this._routes = routes;
        this.getRoutes(routes);

    }

    closeSlider() {

        $('.ti-nav-wrapper').removeClass('show-me').addClass('hide-me');

    }

    showSlider() {

        $('.ti-nav-wrapper').removeClass('hide-me').addClass('show-me');

    }

    getRoutes(routes) {

       this.buildHtml(this._routes);

    }

    goToNavSlide(id) {

        this._element.goToSlide(id);

    }

    buildHtml(bikeRoutes) {

        let currentSlide = 0;

        // Build nvavigation ul li

        for ( var i = 0; i < bikeRoutes.length; i++ ) {
            let route = bikeRoutes[i];
            let LatLng = new google.maps.LatLng(route.lat, route.lng);

            this._element.append(`<li>
                                    <img src="/images/${i+1}.jpg" alt="${route.title}" />
                                    <div>
                                        <h3>${route.title}</h3>
                                        <p>${route.address}</p>
                                        <p>${route.descriptions}</p>
                                    </div>
                                    <a class="plan-link" href='${route.link}' target="_blank">Plan your visit</a>
                                </li>`);

            // this._element.append(`<li>
            //                         <img src="images/map2/${i+1}.jpg" alt="${route.title}" />
            //                         <div>
            //                             <h3>${route.title}</h3>
            //                             <p>${route.address}</p>
            //                             <p>${route.descriptions}</p>
            //                         </div>
            //                         <a class="plan-link" href='${route.link}' target="_blank">Plan your visit</a>
            //                     </li>`);

        }

        // Initialize light sider once html is appended

        setTimeout(() => {

            this._element.lightSlider({
                responsive: [

                ],
                pager: false,
                enableTouch: false,
                enableDrag: false,
                freeMove: false,
                item: 1,
                slideMove: 1,
                loop: false,
                onAfterSlide: (el) => {

                }
            });

        }, 300);

    }

}




