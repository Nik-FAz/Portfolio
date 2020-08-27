<?php

function c_register( $wp_customize ) {

  $wp_customize->add_section( 'contacts' , array(
      'title'      => __( 'Contacts', 'glocin' ),
      'priority'   => 30,
  ) );
  
  $wp_customize->add_setting( 'main_phone', array(
    'default'=> '',
  ));

  $wp_customize->add_control( 'main_phone', array(
    'type'    => 'text',
    'label'    => __( 'Main phone', 'glocin' ),
    'section'  => 'contacts',
    'priority' => 5,
  ));
  
  $wp_customize->add_setting( 'main_email', array(
    'default'=> '',
  ));

  $wp_customize->add_control( 'main_email', array(
    'type'    => 'text',
    'label'    => __( 'Main email', 'glocin' ),
    'section'  => 'contacts',
    'priority' => 5,
  ));
  
  $wp_customize->add_setting( 'main_adress', array(
    'default'=> '',
  ));

  $wp_customize->add_control( 'main_adress', array(
    'type'    => 'textarea',
    'label'    => __( 'Main adress', 'glocin' ),
    'section'  => 'contacts',
    'priority' => 5,
  ));

  $wp_customize->add_setting( 'additional_button_text', array(
    'default'=> '',
  ));

  $wp_customize->add_control( 'additional_button_text', array(
    'type'    => 'text',
    'label'    => __( 'Additional button text', 'glocin' ),
    'section'  => 'contacts',
    'priority' => 5,
  ));

  $wp_customize->add_setting( 'additional_button_link', array(
    'default'=> '',
  ));

  $wp_customize->add_control( 'additional_button_link', array(
    'type'    => 'text',
    'label'    => __( 'Additional button link', 'glocin' ),
    'section'  => 'contacts',
    'priority' => 5,
  ));

  $socials = array('Twitter', 'Instagram', 'Facebook', 'Youtube', 'Linkedin');
  foreach ($socials as $soc) {    
    $wp_customize->add_setting( strtolower($soc), array(
      'default'=> '',
    ));

    $wp_customize->add_control( strtolower($soc), array(
      'type'    => 'text',
      'label'    => __( $soc, 'glocin' ),
      'section'  => 'contacts',
      'priority' => 5,
    ));
  }



  $wp_customize->add_section( 'blog' , array(
      'title'      => __( 'Blog', 'glocin' ),
      'priority'   => 30,
  ) );

 
  $wp_customize->add_setting( 'blog_title', array(
    'default'=> '',
  ));

  $wp_customize->add_control( 'blog_title', array(
    'type'    => 'text',
    'label'    => __( 'Blog title (not archive page)', 'glocin' ),
    'section'  => 'blog',
    'priority' => 5,
  ));

  $wp_customize->add_setting( 'blog_text', array(
    'default'=> '',
  ));

  $wp_customize->add_control( 'blog_text', array(
    'type'    => 'textarea',
    'label'    => __( 'Blog text (not archive page)', 'glocin' ),
    'section'  => 'blog',
    'priority' => 5,
  ));



}

add_action( 'customize_register', 'c_register' );

?>
