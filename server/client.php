<?php

    $arr = array(
        'location' => 'http://127.0.0.1/server.php',
        'uri' => 'http://127.0.0.1/'
    );

    $soap = new SoapClient( null, $arr );

    echo $soap->a();
    echo $soap->b('bbbb');

?>
