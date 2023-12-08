(function () {
    'use strict';

    $(document).trigger('breeze:disable-turbo');

    $.breezemap['algoliaBundle'] = window.algoliaBundle;
    $.breezemap['algoliaAnalytics'] = window.AlgoliaAnalytics;

    var anonymousCmps = [
        'productsHtml',
        'pagesHtml',
        'categoriesHtml',
        'suggestionsHtml',
        'additionalHtml',
        'recommendProductsHtml',
    ];
    anonymousCmps.forEach((key, i) => {
        var cmp = $.breezemap[`__component${$.breezemap.__counter - anonymousCmps.length + i}`];

        if (!cmp?.getItemHtml) {
            throw new Error(`Can't find algolia's ${key} component. Ensure that Breeze integration is up to date`)
        }

        $.breezemap[key] = cmp;
    });
})();
