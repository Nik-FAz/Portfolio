<?php 
/**
 * Essential theme supports
 * */
function theme_setup(){
 
    /** post thumbnail **/
    add_theme_support( 'post-thumbnails' );
 
    /** refresh widgest **/
    add_theme_support( 'customize-selective-refresh-widgets' );
 
 
 
    /** custom logo **/
    add_theme_support( 'custom-logo', array(
        'height'      => 68,
        'width'       => 117,
        'flex-height' => true,
        'flex-width'  => true
    ) );

    add_theme_support( 'woocommerce' );
 
 
 
}
add_action('after_setup_theme','theme_setup');