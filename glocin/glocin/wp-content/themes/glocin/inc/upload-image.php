<?php

  function agp_process_woofile($files, $post_id, $caption){

    require_once(ABSPATH . "wp-admin" . '/includes/image.php');
    require_once(ABSPATH . "wp-admin" . '/includes/file.php');
    require_once(ABSPATH . "wp-admin" . '/includes/media.php');

    $attachment_id = media_handle_upload($files, $post_id);

    $attachment_url = wp_get_attachment_url($attachment_id);

    add_post_meta($post_id, '_file_paths', $attachment_url);

    $attachment_data = array(
      'ID' => $attachment_id,
      'post_excerpt' => $caption
    );

    wp_update_post($attachment_data);

    return $attachment_id;

  } 