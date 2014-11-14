About
=====

jQuery Plugin: Sticky Tabs

https://github.com/timabell/jquery.stickytabs/

This is a fork of Aidan's code mainly to separate it out into its own git repository
to allow easier collaboration.

It is intended to extend bootstrap-tabs default behaviour to remember the selected tab
across page reloads by using the `location.hash`. This also allows linking to a specific
tab.

It was created because it seems the bootstrap maintainers don't wish to add this
capability to their library. https://github.com/twbs/bootstrap/issues/2415#issuecomment-4589184

License
-------

Public Domain


Usage
=====

Run this in document ready or some equivalent initializer on your page:

    $('.nav-tabs').stickyTabs();

Class `nav-tabs` is the default class for the bootstrap tabs feature.

Nuget
=====

If your a visual studio / .net user you can install this with the nuget package through your nuget
package manager.

https://www.nuget.org/packages/jquery.stickytabs/

Contributing
============

Pull requests etc welcome.

Upstream
========

* Original author: Aidan Lister <aidan@php.net>
* Original source: https://raw.githubusercontent.com/aidanlister/code/master/jquery.stickytabs.js
* Original license: "The code resides entirely in the public domain." - from the repo README file.
* Blog post by author: http://aidanlister.com/2014/03/persisting-the-tab-state-in-bootstrap/
* Stackoverflow post by author: https://stackoverflow.com/questions/12131273/twitter-bootstrap-tabs-url-doesnt-change/22160443#22160443

Further reading
===============

* Related post: https://stackoverflow.com/questions/7862233/twitter-bootstrap-tabs-go-to-specific-tab-on-page-reload-or-hyperlink
