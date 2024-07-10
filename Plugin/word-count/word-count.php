<?php
/*
 * Plugin Name:       Word Count
 * Plugin URI:        https://woocopilot.com/plugins/woo-custom-price/
 * Description:       Word count is a powerful WordPress plugin designed to give your customers the flexibility to set their own price when purchasing products on your WooCommerce store. With this plugin, you can empower your customers to input a custom-chosen price for any product, allowing for greater engagement and flexibility in your pricing strategy.
 * Version:           1.0.0
 * Requires at least: 6.5
 * Requires PHP:      7.2
 * Author:            WooCopilot
 * Author URI:        https://woocopilot.com/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       word-count
 * Domain Path:       /languages
 */

/*
Word Count is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.

Word Count is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Word Count. If not, see https://www.gnu.org/licenses/gpl-2.0.html.
*/

function wordcount_activation_hook(){

}
register_activation_hook( __FILE__, 'wordcount_activation_hook' );

function wordcount_deactivation_hook(){

}
register_deactivation_hook( __FILE__, 'wordcount_deactivation_hook' );

function wordcount_load_textdomain(){
    load_plugin_textdomain('word-count', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );

}
add_action('plugins_loaded','wordcount_load_textdomain');

function wordcount_count_number($content)
{
$stripped_content_tag = strip_tags($content);
$wdc = str_word_count($stripped_content_tag);
$label = __('Total Number of words', 'wdc');
$label = apply_filters('wdc_word_count_label', $label);
$tag = apply_filters('wdc_word_count_tag', 'h3');
$content  .= sprintf('<%s> %s : %s</%s>',$tag ,$label ,$wdc, $tag);
return $content;

}
add_filter('the_content', 'wordcount_count_number');

function wordcount_count_label($heading){
    $heading = "Total Number";
    return $heading;

}
add_filter('wdc_word_count_label', 'wordcount_count_label');

function wordcount_count_tag($tag )
{

    return "h4" ;
}
add_filter('wdc_word_count_tag', 'wordcount_count_tag');


function word_reading_time($content)
{
    $stripped_content_tag = strip_tags($content);
    $wdc = str_word_count($stripped_content_tag);
    $reading_minutes = floor($wdc / 50);
    $reading_seconds = floor($wdc % 50 / (50/60));
    $is_visible = apply_filters('word_reading_time_display', 1);
    if ($is_visible){
        $label = __('Total reading time', 'word-count');
        $label = apply_filters('wrod_readingtime_heading', $label);
        $tag = apply_filters('wrod_readingtime_tag', 'h3');
        $content .= sprintf('<%s> %s : %s minute %s second </%s>', $tag, $label, $reading_minutes, $reading_seconds, $tag);
        return $content;
    }
}
add_filter('the_content', 'word_reading_time');

function word_reading_time_tag($tag)
{
    return "h4";
}
add_filter('wrod_readingtime_tag', 'word_reading_time_tag');