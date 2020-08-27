<?php 

// disable plugins update (set in wp-config.php)
function filter_plugin_updates( $update ) {    
    global $DISABLE_UPDATE; // см. wp-config.php
    if( !is_array($DISABLE_UPDATE) || count($DISABLE_UPDATE) == 0 ){  return $update;  }
    if ($update && $update->response){
        foreach( $update->response as $name => $val ){
            foreach( $DISABLE_UPDATE as $plugin ){
                if( stripos($name,$plugin) !== false ){
                    unset( $update->response[ $name ] );
                }
            }
        }
    }
    return $update;
}
add_filter( 'site_transient_update_plugins', 'filter_plugin_updates' );
