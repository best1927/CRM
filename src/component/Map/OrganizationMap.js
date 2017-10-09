/* global google */ 
 
/*window.addEventListener('load', function() {
    mymap();
  })*/


  document.addEventListener("DOMContentLoaded", function(event) {
    mymap();
  });

   function mymap() {
    let mapOptions = {
        center: new google.maps.LatLng(13.826515, 100.748794),
        zoom: 10
    }
    let map = new google.maps.Map(document.getElementById("map"), mapOptions);

    let marker = new google.maps.Marker({
        position: new google.maps.LatLng(13.826515, 100.748794),
        map: map
    });
 

    let contentString = '<div id="infomation_container" align="center">';
    contentString += '<label id="lblAddLocation">16 Moo 2 Sai Kong Din Tai, Khlong Sam Wa, Bangkok 10510</label>';
    //contentString += '<br />';
    //contentString += '<button type="button" id="btnsave" class="btn btn-success btn-sm" onclick="showAddModal(event,this);">OK</button>';
    //contentString += '<button type="button" id="btncancel" class="btn btn-danger btn-sm" onclick="closeInfowindow();">Cancel</button>';
    contentString += '</div>';

    let infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    //let infowindow2 = new google.maps.InfoWindow({
    //    content: contentString
    //});
    google.maps.event.addDomListener(marker, 'click', function () {
        //openfowindow(this, 1);                 
        //$("#addModal .input-sm").val("");
        infowindow.open(map, marker);
        //searchLatLong(item.getPosition().lat(), item.getPosition().lng());
    });



    google.maps.event.addDomListener(marker, 'mouseover', function () {
        //openfowindow(this, 1);                 
        //$("#addModal .input-sm").val("");
        infowindow.open(map, marker);
        //searchLatLong(item.getPosition().lat(), item.getPosition().lng());
    });
    infowindow.open(map, marker);
}

 