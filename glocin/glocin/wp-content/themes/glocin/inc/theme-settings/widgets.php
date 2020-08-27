<?php
  
  register_sidebar( array(
      'name' => __( 'Footer', '' ),
      'id' => 'footer',
      'before_widget' => '<div class="footer__cont">',
      'after_widget' => '</div>'
  ) );