<?php

// register scripts ans styles

function custom_scripts_styles() {
  
    global $wp_styles;

    wp_register_style( 'select2', get_template_directory_uri() . '/css/select2.min.css', array(), '', 'screen' );
    wp_register_style( 'fancybox', get_template_directory_uri() . '/css/jquery.fancybox.min.css', array(), '', 'screen' );
    wp_register_style( 'main', get_template_directory_uri() . '/css/main.min.css', array(), '', 'screen' );
    wp_register_style( 'theme', get_template_directory_uri() . '/style.css', array(), '', 'screen' );

    wp_enqueue_style( 'select2' );
    wp_enqueue_style( 'fancybox' );
    wp_enqueue_style( 'main' );
    wp_enqueue_style( 'theme' );

    wp_deregister_script('jquery');
    wp_enqueue_script( 'jquery', get_template_directory_uri() . '/js/libs/jquery.min.js', array(), true);
    wp_enqueue_script( 'particles', get_template_directory_uri() . '/js/libs/particles.min.js', array('jquery'), true);
    wp_enqueue_script( 'fancybox', get_template_directory_uri() . '/js/libs/jquery.fancybox.min.js', array('jquery'), true);
    wp_enqueue_script( 'select2', get_template_directory_uri() . '/js/libs/select2.min.js', array('jquery'), true);
    wp_enqueue_script( 'custom', get_template_directory_uri() . '/js/script.min.js', array('jquery', 'particles', 'fancybox', 'select2'), true);
}

add_action( 'wp_enqueue_scripts', 'custom_scripts_styles', 100  );

?>
