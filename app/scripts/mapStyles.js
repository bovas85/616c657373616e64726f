var mapStyles = [
    {
        'featureType': 'all',
        'elementType': 'labels.text.fill',
        'stylers': [
            {
                'saturation': 36
            },
            {
                'color': '#000000'
            },
            {
                'lightness': 40
            }
        ]
    },
    {
        'featureType': 'all',
        'elementType': 'labels.text.stroke',
        'stylers': [
            {
                'visibility': 'on'
            },
            {
                'color': '#000000'
            },
            {
                'lightness': 16
            }
        ]
    },
    {
        'featureType': 'all',
        'elementType': 'labels.icon',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'administrative',
        'elementType': 'geometry.fill',
        'stylers': [
            {
                'lightness': 20
            }
        ]
    },
    {
        'featureType': 'administrative',
        'elementType': 'geometry.stroke',
        'stylers': [
            {
                'lightness': 17
            },
            {
                'weight': 1.2
            },
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'administrative',
        'elementType': 'labels.text.fill',
        'stylers': [
            {
                'color': '#78bd63'
            }
        ]
    },
    {
        'featureType': 'administrative',
        'elementType': 'labels.text.stroke',
        'stylers': [
            {
                'color': '#78bd63'
            },
            {
                'weight': '1'
            },
            {
                'visibility': 'on'
            }
        ]
    },
    {
        'featureType': 'administrative.country',
        'elementType': 'all',
        'stylers': [
            {
                'color': '#78bd63'
            },
            {
                'visibility': 'on'
            }
        ]
    },
    {
        'featureType': 'administrative.country',
        'elementType': 'labels.text',
        'stylers': [
            {
                'visibility': 'simplified'
            }
        ]
    },
    {
        'featureType': 'administrative.country',
        'elementType': 'labels.text.fill',
        'stylers': [
            {
                'color': '#78bd63'
            }
        ]
    },
    {
        'featureType': 'administrative.country',
        'elementType': 'labels.text.stroke',
        'stylers': [
            {
                'color': '#78bd63'
            },
            {
                'visibility': 'on'
            }
        ]
    },
    {
        'featureType': 'administrative.province',
        'elementType': 'all',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'administrative.province',
        'elementType': 'labels',
        'stylers': [
            {
                'visibility': 'on'
            }
        ]
    },
    {
        'featureType': 'administrative.province',
        'elementType': 'labels.text',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'administrative.locality',
        'elementType': 'labels',
        'stylers': [
            {
                'visibility': 'simplified'
            },
            {
                'color': '#377f20'
            }
        ]
    },
    {
        'featureType': 'landscape',
        'elementType': 'geometry',
        'stylers': [
            {
                'color': '#a9df98'
            },
            {
                'lightness': 20
            }
        ]
    },
    {
        'featureType': 'landscape',
        'elementType': 'labels',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'poi',
        'elementType': 'all',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'poi',
        'elementType': 'geometry',
        'stylers': [
            {
                'color': '#000000'
            },
            {
                'lightness': 21
            }
        ]
    },
    {
        'featureType': 'poi',
        'elementType': 'labels.text',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'road',
        'elementType': 'all',
        'stylers': [
            {
                'visibility': 'on'
            }
        ]
    },
    {
        'featureType': 'road',
        'elementType': 'geometry',
        'stylers': [
            {
                'visibility': 'on'
            },
            {
                'color': '#69c44c'
            }
        ]
    },
    {
        'featureType': 'road',
        'elementType': 'geometry.fill',
        'stylers': [
            {
                'visibility': 'on'
            },
            {
                'color': '#69c44c'
            }
        ]
    },
    {
        'featureType': 'road',
        'elementType': 'geometry.stroke',
        'stylers': [
            {
                'visibility': 'on'
            },
            {
                'color': '#69c44c'
            }
        ]
    },
    {
        'featureType': 'road',
        'elementType': 'labels',
        'stylers': [
            {
                'visibility': 'simplified'
            }
        ]
    },
    {
        'featureType': 'road.highway',
        'elementType': 'geometry.fill',
        'stylers': [
            {
                'color': '#69c44c'
            },
            {
                'lightness': 17
            }
        ]
    },
    {
        'featureType': 'road.highway',
        'elementType': 'geometry.stroke',
        'stylers': [
            {
                'lightness': 29
            },
            {
                'weight': 0.2
            }
        ]
    },
    {
        'featureType': 'road.highway',
        'elementType': 'labels',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'road.highway.controlled_access',
        'elementType': 'labels',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'road.arterial',
        'elementType': 'geometry',
        'stylers': [
            {
                'lightness': 18
            }
        ]
    },
    {
        'featureType': 'road.local',
        'elementType': 'geometry',
        'stylers': [
            {
                'lightness': 16
            }
        ]
    },
    {
        'featureType': 'transit',
        'elementType': 'all',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'transit',
        'elementType': 'geometry',
        'stylers': [
            {
                'color': '#000000'
            },
            {
                'lightness': 19
            }
        ]
    },
    {
        'featureType': 'water',
        'elementType': 'geometry',
        'stylers': [
            {
                'color': '#f2fffd'
            },
            {
                'lightness': 17
            }
        ]
    },
    {
        'featureType': 'water',
        'elementType': 'labels',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    }
];
