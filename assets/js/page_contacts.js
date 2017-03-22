var ContactPage = function () {

    return {

    	//Basic Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				scrollwheel: false,
				lat: 28.36446,
				lng: 75.58805
			  });

			  var marker = map.addMarker({
				lat: 28.36446,
				lng: 75.58805,
	            title: 'CRIS, BITS Pilani'
		       });
			});
        },

        //Panorama Map
        initPanorama: function () {
		    var panorama;
		    $(document).ready(function(){
		      panorama = GMaps.createPanorama({
		        el: '#panorama',
		        lat : 28.36446,
		        lng : 75.58805
		      });
		    });
		}

    };
}();
