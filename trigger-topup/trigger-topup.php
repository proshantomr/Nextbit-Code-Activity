<?php

/*
 * Plugin Name:       Trigger Top Up
 * Plugin URI:        https://woocopilot.com/plugins/woo-custom-price/
 * Description:       A plugin that adds a "Scroll to Top" button.
 * Version:           1.0.0
 * Requires at least: 6.5
 * Requires PHP:      7.2
 * Author:            WooCopilot
 * Author URI:        https://woocopilot.com/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       trigger-topup
 * Domain Path:       /languages
 */

/*
Trigger Top Up is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.

Trigger Top Up is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Trigger Top Up. If not, see https://www.gnu.org/licenses/gpl-2.0.html.
*/

function trigger_topup_load_textdomain() {
    load_plugin_textdomain('trigger-topup', false, plugin_basename(dirname(__FILE__)) . '/languages');
}
add_action('plugins_loaded', 'trigger_topup_load_textdomain');

function trigger_topup_scroll() {
    wp_enqueue_style('trigger-topup-style', plugins_url('include/trigger-topup.css', __FILE__));
    wp_enqueue_script('trigger-topup-script', plugins_url('include/trigger-topup.js', __FILE__), array(), null, true);
}
add_action('wp_enqueue_scripts', 'trigger_topup_scroll');

function trigger_scroll_up() {
    echo "<button class='trigger-topup-scroll-up' type='button' onclick='topFunction()' id='myBtn'>Top</button>";
}
add_action('wp_footer', 'trigger_scroll_up');

