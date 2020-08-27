<?php

add_filter( 'get_custom_logo', 'change_logo_class' );


function change_logo_class( $html ) {

    $html = str_replace( 'custom-logo-link', 'custom-logo-link logo', $html );
    $html = str_replace( 'logo__img', 'custom-logo', $html );
    return $html;
}