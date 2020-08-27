function initMap(){
			var element = document.getElementsByClassName('map__content');
			var options = {
				zoom: 18,
				center:{lat: 46.476884, lng: 30.741742},
				streetViewControl: false,
				panControl: false,
				zoomControl: false,
    			mapTypeControl: false,
    			fullscreenControl: false,
    			scrollwheel: false
			}

			var mafiaMap = new google.maps.Map(element[0], options);

			var marker = new google.maps.Marker({
				position: {lat: 46.476884, lng: 30.741742},
				map: mafiaMap,
				icon: {
					url: "img/marker.png",
					scaledSize: new google.maps.Size(61, 80)
				}
			})
		}