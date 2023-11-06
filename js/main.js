$(function() {

    "use strict";

    $('img[src$=".svg"]').each(function() {

        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');
    });





});

$(document).ready(function() {
    $('.app-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        navText: ['<svg id="Group_4610" data-name="Group 4610" xmlns="http://www.w3.org/2000/svg" width="289.049" height="492.004" viewBox="0 0 289.049 492.004"><path id="Path_20052" data-name="Path 20052" d="M109.326,226.8,328.275,7.86a26.972,26.972,0,0,1,38.064,0l16.124,16.12a26.95,26.95,0,0,1,0,38.064L198.606,245.9l184.06,184.06a26.977,26.977,0,0,1,0,38.068l-16.124,16.116a26.972,26.972,0,0,1-38.064,0L109.326,265a27.161,27.161,0,0,1,0-38.2Z" transform="translate(-101.478)"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="289.049" height="492.004" viewBox="0 0 289.049 492.004"><g id="Group_4610" data-name="Group 4610" transform="translate(-101.478)"><path id="Path_20052" data-name="Path 20052" d="M382.678,226.8,163.73,7.86a26.972,26.972,0,0,0-38.064,0L109.542,23.98a26.95,26.95,0,0,0,0,38.064L293.4,245.9,109.338,429.96a26.977,26.977,0,0,0,0,38.068l16.124,16.116a26.972,26.972,0,0,0,38.064,0L382.678,265a27.161,27.161,0,0,0,0-38.2Z"/></g></svg>'],
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
    });
});