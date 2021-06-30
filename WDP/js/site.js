// JavaScript source code
// Declare a variable for map
var map;
// Get lattitude and longitude of australia
var Australia = new google.maps.LatLng(-33.8678513, 151.2073212);
// Initialise the map
function initMap() {
    // Define the properties for australia map
    var worldMap = {
        center: Australia,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // Create a map object for Canberra Centre 
    // using canberraMap and the <div> element with id="googleMap"
    map = new google.maps.Map(
        document.getElementById("googleMap"), worldMap);

    // Add markers below this line
    addIBMMarker(map);
    addamazonMarker(map);
    addGoogleMarker(map);
    addmicrosoftMarker(map);
    addoracleMarker(map);
    addsasMarker(map);

}
// Add other functions below this line
function addIBMMarker(map) {
    // IBM Australia
    var IBM =
        new google.maps.LatLng(-37.820963, 144.966105);
    var markerIBM = new google.maps.Marker({
        position: IBM,
    });

    markerIBM.setMap(map);

    var contentIBM =
        ' <h1>IBM</h1>' +
        ' <img src="../images/ibm.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>IBM</b>International Business Machines    ' +
        ' Corporation is an American multinational information' +
        'technology company headquartered in Armonk, New York,' +
        'with operations in over 170 countries.' +
        '<a href="https://en.wikipedia.org/wiki/IBM_' +
        'IBM">Wikipedia</a>' +
        ' </p>';

    var infoIBM = new google.maps.InfoWindow({
        content: contentIBM
    });

    google.maps.event.addListener(markerIBM, 'click',
        function () {
            infoIBM.open(map, markerIBM);
        });
}
//Amazon marker
function addamazonMarker(map) {
    // amazon Australia
    var amazon =
        new google.maps.LatLng(-33.8726651, 151.2076409);
    var markeramazon = new google.maps.Marker({
        position: amazon,
    });

    markeramazon.setMap(map);

    var contentamazon =
        ' <h1>amazon</h1>' +
        ' <img src="../images/amazon.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>Amazon</b> Amazon.com, Inc., is an   ' +
        'American multinational technology company ' +
        'based in Seattle, Washington, that focuses on e-commerce, ' +
        'cloud computing, digital streaming, and artificial intelligence.  ' +
        
        '<a href="https://en.wikipedia.org/wiki/Amazon_(company)_' +
        'Amazon">Wikipedia</a>' +
        ' </p>';

    var infoamazon = new google.maps.InfoWindow({
        content: contentamazon
    });

    google.maps.event.addListener(markeramazon, 'click',
        function () {
            infoamazon.open(map, markeramazon);
        });
}
//google function

function addGoogleMarker(map) {
    // google Australia
    var Google =
        new google.maps.LatLng(-33.8664890, 151.1958561);
    var markerGoogle = new google.maps.Marker({
        position: Google,
    });

    markerGoogle.setMap(map);

    var contentGoogle =
        ' <h1>google</h1>' +
        ' <img src="../images/google.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>Google</b> Google LLC is an American    ' +
        'multinational technology company that specializes' +
        'in Internet-related services and products, which' +
        'include online advertising technologies, search engine' +
        ', cloud computing, software, and hardware.<br>' +
        '<a href="https://en.wikipedia.org/wiki/Google_' +
        'Google">Wikipedia</a>' +
        ' </p>';

    var infoGoogle = new google.maps.InfoWindow({
        content: contentGoogle
    });

    google.maps.event.addListener(markerGoogle, 'click',
        function () {
            infoGoogle.open(map, markerGoogle);
        });
}

//Microsoft function
function addmicrosoftMarker(map) {
    // microsoft Australia
    var microsoft =
        new google.maps.LatLng(-35.3066112, 149.1341807);
    var markermicrosoft = new google.maps.Marker({
        position: microsoft,
    });

    markermicrosoft.setMap(map);

    var contentmicrosoft =
        ' <h1>microsoft</h1>' +
        ' <img src="../images/microsoft.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>Microsoft</b> is an American multinational  ' +
        'technology company with headquarters in Redmond, Washington. ' +
        ' It develops, manufactures, licenses, supports, and' +
        'sells computer software, consumer electronics, ' +
        ' personal computers, and related services.<br>' +
        '<a href="https://en.wikipedia.org/wiki/Microsoft_' +
        'Microsoft">Wikipedia</a>' +
        ' </p>';

    var infomicrosoft = new google.maps.InfoWindow({
        content: contentmicrosoft
    });

    google.maps.event.addListener(markermicrosoft, 'click',
        function () {
            infomicrosoft.open(map, markermicrosoft);
        });
}

//Oracle function
function addoracleMarker(map) {
    // oracle Australia
    var oracle =
        new google.maps.LatLng(-35.2849752, 149.1229319);
    var markeroracle = new google.maps.Marker({
        position: oracle,
    });

    markeroracle.setMap(map);

    var contentoracle =
        ' <h1>oracle</h1>' +
        ' <img src="../images/oracle.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>Oracle</b> Oracle Corporation is an American   ' +
        'multinational computer technology corporation headquartered in Redwood Shores ' +
        ', California. The company sells database software and technology, ' +
        'cloud engineered systems, and enterprise software ' +
        'products—particularly its own brands of database management systems.<br>' +
        '<a href="https://en.wikipedia.org/wiki/Oracle_Corporation_' +
        'Oracle">Wikipedia</a>' +
        ' </p>';

    var infooracle = new google.maps.InfoWindow({
        content: contentoracle
    });

    google.maps.event.addListener(markeroracle, 'click',
        function () {
            infooracle.open(map, markeroracle);
        });
}

//SAS function
function addsasMarker(map) {
    // SAS Australia
    var sas =
        new google.maps.LatLng(-33.814981, 151.1528863);
    var markersas = new google.maps.Marker({
        position: sas,
    });

    markersas.setMap(map);

    var contentsas =
        ' <h1>sas</h1>' +
        ' <img src="../images/sas.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>SAS</b>Institute is an American multinational  ' +
        'developer of analytics software based in Cary, North Carolina. ' +
        ' SAS develops and markets a suite of analytics software, ' +
        'which helps access, manage, analyze and  ' +
        'report on data to aid in decision-making.<br>' +
        '<a href="https://en.wikipedia.org/wiki/SAS_Institute_' +
        'SAS">Wikipedia</a>' +
        ' </p>';

    var infosas = new google.maps.InfoWindow({
        content: contentsas
    });

    google.maps.event.addListener(markersas, 'click',
        function () {
            infosas.open(map, markersas);
        });
}
// Add a DOM listener that will execute the initMap function 
// on window load (when the page is loaded)
google.maps.event.addDomListener(window, 'load', initMap);        
