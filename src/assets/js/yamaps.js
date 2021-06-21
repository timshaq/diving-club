export default function () {

const ourGeo = [44.561012, 38.077115]

const mapEl = document.getElementById('contactsMap');
if(!mapEl) return
    ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("contactsMap", {
            center: ourGeo,
            zoom: 17
        });
		// var myGeoObject = new ymaps.GeoObject({
		//     geometry: {
		//         type: "Point", // тип геометрии - точка
		//         coordinates: ourGeo // координаты точки
		//     }
		// });

		// myMap.geoObjects.add(myGeoObject);
		var myPlacemark = new ymaps.Placemark(ourGeo, {}, {
		    iconLayout: 'default#image',
		    iconImageHref: 'assets/img/yamap-tag.png',
		    iconImageSize: [28, 36],
		    iconImageOffset: [-36, -36]
		});
		myMap.geoObjects.add(myPlacemark);

    }
const contactsMapList = document.getElementById('contactsMapList');
const contactsMapBox = document.getElementById('contactsMapBox');


}