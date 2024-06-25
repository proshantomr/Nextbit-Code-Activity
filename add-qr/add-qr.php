<?php

/*
 * Plugin Name:       Add QR
 * Plugin URI:        https://woocopilot.com/plugins/woo-custom-price/
 * Description:       Word count is a powerful WordPress plugin designed to give your customers the flexibility to set their own price when purchasing products on your WooCommerce store. With this plugin, you can empower your customers to input a custom-chosen price for any product, allowing for greater engagement and flexibility in your pricing strategy.
 * Version:           1.0.0
 * Requires at least: 6.5
 * Requires PHP:      7.2
 * Author:            WooCopilot
 * Author URI:        https://woocopilot.com/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       add-qr
 * Domain Path:       /languages
 */

/*
Add QR  is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.

Add QR is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Add QR. If not, see https://www.gnu.org/licenses/gpl-2.0.html.
*/

function qr_activation_hook()
{

}

register_activation_hook(__FILE__, 'qr_activation_hook');

function qr_deactivation_hook()
{

}

register_deactivation_hook(__FILE__, 'qr_deactivation_hook');

function qr_load_textdomain()
{
    load_plugin_textdomain('add-qr', false, dirname(plugin_basename(__FILE__)) . '/languages/');

}

add_action('plugins_loaded', 'qr_load_textdomain');

function display_qr($content) {
$current_post_id = get_the_ID();
    $current_post_title = get_the_title($current_post_id);
    $current_post_url = urlencode(get_permalink($current_post_id));
    $image_src = sprintf('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=%s', $current_post_url);
    $content .= sprintf("<div><img src='%s' alt='%s'></div>", $image_src, $current_post_title);
    return $content;
}
add_filter('the_content', 'display_qr');
