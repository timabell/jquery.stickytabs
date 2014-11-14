/**
 * jQuery Plugin: Sticky Tabs
 * https://raw.githubusercontent.com/aidanlister/code/master/jquery.stickytabs.js
 * "The code resides entirely in the public domain." - from the repo README file.
 *
 * Usage:
 *   $('.nav-tabs').stickyTabs();
 *
 * http://aidanlister.com/2014/03/persisting-the-tab-state-in-bootstrap/
 * https://stackoverflow.com/questions/12131273/twitter-bootstrap-tabs-url-doesnt-change/22160443#22160443
 *
 * @author Aidan Lister <aidan@php.net>
 * @version 1.0.1
 */
(function ( $ ) {
    $.fn.stickyTabs = function() {
        context = this

        // Show the tab corresponding with the hash in the URL, or the first tab.
        var showTabFromHash = function() {
          var hash = window.location.hash;
          var selector = hash ? 'a[href="' + hash + '"]' : 'li.active > a';
          $(selector, context).tab('show');
        }

        // Set the correct tab when the page loads
        showTabFromHash(context)

        // Set the correct tab when a user uses their back/forward button
        window.addEventListener('hashchange', showTabFromHash, false);

        // Change the URL when tabs are clicked
        $('a', context).on('click', function(e) {
          history.pushState(null, null, this.href);
        });

        return this;
    };
}( jQuery ));

