<?php

function get_svg_img($path, $before = '', $after = ''){
  $file = file_get_contents(getcwd() . str_replace(array('http://glocin.com', 'http://gloc.in'), '', $path));

  if ( $file === false ){
    return $file;
  }

  return $before . $file . $after;
}

function the_svg_img($path, $before = '', $after = ''){
  $image = get_svg_img($path, $before, $after);
  echo $image;
}

function get_icons_path($icon){
  return get_template_directory_uri() . '/img/icons/' . $icon;
}
