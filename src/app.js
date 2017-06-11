(function () {
    'use strict';

    angular.module('app', ['ngMaterial'])
        .config(function ($mdThemingProvider) {
            var optrustPrimary = {
                '50': '#0fda4f',
                '100': '#0ec247',
                '200': '#0caa3e',
                '300': '#0a9335',
                '400': '#097b2d',
                '500': '#076324',
                '600': '#054b1b',
                '700': '#043313',
                '800': '#021c0a',
                '900': '#000401',
                'A100': '#15ee59',
                'A200': '#2cf06a',
                'A400': '#44f27b',
                'A700': '#000000',
                 'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                // on this palette should be dark or light

                'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
                    '200', '300', '400', 'A100'],
                'contrastLightColors': undefined    // could also specify this if default was 'dark'
            };
            $mdThemingProvider
                .definePalette('optrustPrimary',
                optrustPrimary);

            var optrustAccent = {
                '50': '#367939',
                '100': '#3e8b41',
                '200': '#469c49',
                '300': '#4dae52',
                '400': '#5eb762',
                '500': '#6fbf73',
                '600': '#93cf95',
                '700': '#a4d7a6',
                '800': '#b6dfb8',
                '900': '#c8e6c9',
                'A100': '#93cf95',
                'A200': '#81c784',
                'A400': '#6fbf73',
                'A700': '#d9eeda'
            };
            $mdThemingProvider
                .definePalette('optrustAccent',
                optrustAccent);

            var optrustWarn = {
                '50': '#ffb280',
                '100': '#ffa266',
                '200': '#ff934d',
                '300': '#ff8333',
                '400': '#ff741a',
                '500': '#ff6400',
                '600': '#e65a00',
                '700': '#cc5000',
                '800': '#b34600',
                '900': '#993c00',
                'A100': '#ffc199',
                'A200': '#ffd1b3',
                'A400': '#ffe0cc',
                'A700': '#803200'
            };
            $mdThemingProvider
                .definePalette('optrustWarn',
                optrustWarn);

            var optrustBackground = {
                '50': '#eaeaea',
                '100': '#dddddd',
                '200': '#d0d0d0',
                '300': '#c3c3c3',
                '400': '#b7b7b7',
                '500': '#aaa',
                '600': '#9d9d9d',
                '700': '#909090',
                '800': '#848484',
                '900': '#777777',
                'A100': '#f6f6f6',
                'A200': '#ffffff',
                'A400': '#ffffff',
                'A700': '#6a6a6a'
            };
            $mdThemingProvider
                .definePalette('optrustBackground',
                optrustBackground);

            $mdThemingProvider.theme('default')
                .primaryPalette('optrustPrimary')
                .accentPalette('optrustAccent')
                .warnPalette('optrustWarn')
                .backgroundPalette('optrustBackground')
        });

})();