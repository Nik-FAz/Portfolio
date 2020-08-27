<?php

/* pagination */

add_filter( 'wp_pagenavi', 'wd_pagination', 10, 2 );
 
function wd_pagination($html) {
  $out = ''; 
  $out = str_replace("<a ","<li><a ",$html);  
  $out = str_replace("</a>","</a></li>",$out);
  $out = str_replace("<span","<li><span",$out); 
  $out = str_replace("extend","page-numbers dots",$out); 
  $out = str_replace("current","page-numbers current",$out); 
  $out = str_replace("</span>","</span></li>",$out); 
  $out = str_replace("&raquo;","<span class='text'>Další</span><span class='icon'>".get_svg_img( get_icons_path('arrow.svg') )."</span>",$out);  
  $out = str_replace("&laquo;","<span class='icon'>".get_svg_img( get_icons_path('arrow.svg') )."</span><span class='text'>Předchozí</span>",$out);  
  $out = str_replace("<div class='wp-pagenavi' role='navigation'>","<ul class='page-numbers'>",$out);
  $out = str_replace("</div>","</ul>",$out); 
 
  return '<nav class="pagination woocommerce-pagination">'.$out.'</nav>';
}