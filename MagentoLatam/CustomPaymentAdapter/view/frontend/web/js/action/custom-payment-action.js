define(
    [
        'jquery',
        'mage/url',
    ],
    function ($, urlBuilder) {
        'use strict';
        return function (messageContainer) {
            const urlRedirect = urlBuilder.build("magentolatam");
            $.mage.redirect(urlRedirect);
        };
    }
);
