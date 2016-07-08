<?php

    $arr = array(
        'location' => 'http://127.0.0.1/server.php',
        'uri'       => 'http://127.0.0.1/'
    );

    $soap = new SoapServer( null, $arr );

    $soap->addFunction(SOAP_FUNCTIONS_ALL);
    $soap->handle();

    function a(){
        return "Hi, I'm Aaron";
    }

    function b($b) {
        return $b;
    }

?>
