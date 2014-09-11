// https://www.google.com/analytics/web/?hl=en#report/content-event-events/a46981709w78135314p80785414/%3F_u.date00%3D20140319%26_u.date01%3D20140319%26explorer-segmentExplorer.segmentId%3Danalytics.eventLabel%26explorer-table.plotKeys%3D%5B%5D%26explorer-table.rowStart%3D0%26explorer-table.rowCount%3D5000%26_r.drilldown%3Danalytics.eventCategory%3Ageo_location/
// var res = []; nodes = document.getElementById('ID-rowTable').getElementsByClassName('ID-dimension-data-0'); for(i=0;i<nodes.length;i++) { res.push(nodes[i].firstChild.innerText); }; res;

var locations = ["37.774929:-122.419416", "37.579203340034624:-122.06029012154553", "37.580238346746036:-122.05906943389026", "37.7819857:-122.40918669999999", "37.78194260000001:-122.40915589999999", "37.7745057:-122.2167339", "37.777522:-122.47918319999998", "37.777554699999996:-122.47919139999999", "37.783199200000006:-122.4058785"];
var locations = ["37.774929:-122.419416", "31.5112:-81.452904", "40.714352999999996:-74.005973", "42.8345861:-73.7965973", "33.876596584177356:-117.94831020795887", "53.0680017:8.7998078", "41.817745599999995:-71.3967674", "37.76524757504255:-122.46893514890454", "35.9564949:-83.9376475", "37.775655799999996:-122.41382340000001", "37.395925000000005:-122.14819799999998", "37.7522008:-122.4198189", "37.7681443:-122.4552748", "37.82923807799996:-121.27728663468844", "37.3956164:-122.1481876", "40.110337799999996:-88.2555407", "40.2295635:-111.6583004", "29.5010544:-98.6905707", "37.680766:-122.39997100000001", "37.727035:-122.4419361", "37.7762345:-122.4114158", "37.782114150007985:-122.40928425295019", "47.6127522:-122.3483576", "33.8731176:-118.30348640000001", "37.734086985:-122.44939189499999", "39.513762071728706:-122.19873335212469", "29.3503694:-98.4259132", "31.0408917:-97.465688", "34.0823318596565:-118.36180417796209", "37.75557335004001:-122.42076451901572", "37.784622999999996:-122.40298949999999", "49.411576:2.8024486", "29.7422146:-95.3992115", "29.883274999999998:-97.941394", "32.35669466837274:-106.76564788791318", "34.0914923:-117.713559", "36.6015831:-121.8567963", "37.7271469:-122.4331589", "37.7754611:-122.39734000000001", "38.7116718:-90.4149041", "38.88905146914494:-77.12131117667496", "47.8170875:-122.3511647", "33.41240896622671:-111.88529872130245", "34.0252771:-118.4917304", "37.75217071934885:-122.41999532911973", "37.76423420001663:-122.17653308139202", "37.7651669:-122.4689566", "37.77526120223505:-122.41317633116067", "37.7763572:-122.40334800000001", "38.4256788:-121.37667270000001", "38.795694499999996:-89.9701853", "42.0578875:-87.9256582", "31.5504261:-97.2034924", "32.7238532:-95.1638203", "33.3539774:-111.9605541", "33.6211932:-86.2347384", "33.6792477:-117.9987746", "33.680567599999996:-94.1232624", "34.07571395090602:-118.27246829807022", "34.11975907213497:-117.36653280527197", "37.621464366128315:-122.41697363566831", "37.77275547869646:-122.42036389153925", "37.775799:-122.412804", "37.779213899999995:-122.41607859999999", "37.7809999:-122.4164658", "37.8612716:-122.26027049999999", "38.9250425:-77.0803049", "39.2725634:-76.6075159", "39.7357271:-121.8352905", "40.130382:-75.51491299999999", "40.7278991:-111.8668665", "40.92979195999999:-111.88782059999997", "41.18754941293557:-87.8902375574971", "42.5171012:-83.4622358", "44.46682039395835:-69.8863853541285", "44.8483368:-92.6313593", "26.4794303:-80.066191", "28.2233204:-80.6792493", "29.9464502:-95.6178191", "33.7026691:-118.01620580000001", "34.0131618:-118.1203849", "34.0610216:-118.0195341", "34.0958502:-117.3280263", "36.5853018:-82.4001773", "37.721699:-122.444397", "37.774899:-122.419403", "37.7759038:-122.4114184", "37.7761661:-122.42132149999999", "37.78393944816736:-122.40913464933651", "37.784521500000004:-122.40328319999999", "37.7862699:-122.39494579999999", "40.006265816756354:-74.8181994214077", "40.7131196:-74.0063933", "42.3014355:-83.25093573", "26.182268390000477:-97.99651185999988", "31.5453277:-97.1672331", "33.1937119:-117.3677698", "34.297879:-83.824066", "34.7502486:-77.3566955", "34.8950817:-82.3298505"];

function toPoint(l) {
  var res = l.split(':');
  return [ parseFloat(res[0]), parseFloat(res[1]) ];
}

var points = locations.map(function(l) { var p = toPoint(l); return new google.maps.LatLng(p[0], p[1]); });

var map, pointarray, heatmap;

function initialize() {
  var mapOptions = {
    zoom: 15,
    center: points[0],
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  // Marker map
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var pointArray = new google.maps.MVCArray(points);

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: pointArray
  });

  heatmap.set('radius', 30);
  heatmap.set('opacity', 2);
  heatmap.setMap(map);

  // Heat Map
  // map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  // locations.forEach(function(l) {
  //   var p = toPoint(l);
  //   for (i = 0; i < locations.length; i++) {
  //   marker = new google.maps.Marker({
  //     position: new google.maps.LatLng(p[0], p[1]),
  //     map: map
  //   });
  // }
  // });
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ]
  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() {
  heatmap.set('radius', heatmap.get('radius') ? null : 20);
}

function changeOpacity() {
  heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}

google.maps.event.addDomListener(window, 'load', initialize);
