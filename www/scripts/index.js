
function f1() {

    var a = parseInt(document.CalForm.t1.value);
    var b = parseInt(document.CalForm.t2.value);

    var c = a + b;

    document.getElementById("t3").innerHTML = c;


    
}

(function() {
    

   

        
        document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );


    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();