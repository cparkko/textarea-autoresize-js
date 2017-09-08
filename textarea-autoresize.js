/**
 * Autoresize for textarea field
 * Author: cparkko <cparkko@gmail.com>
 */
"use strict";

(function ($) {
    $.fn.autoresize = function (options) {
        var self = this;

        var settings = {
            width: self.outerWidth(),
            height: self.outerHeight()
        };

        $.extend(settings, options);

        var update_height = function () {
            var text = self.val() ? self.val() : '';

            var formatted_str = text.replace(/\n/g, '<br/>');
            var $div_container = self.next('.textarea-autoresize');

            if (typeof $div_container != 'undefined') {
                $div_container.html(formatted_str);
                self.css('height', $div_container.outerHeight() + 'px');
            }
        };

        if (options === 'refresh') {
            update_height();
            return self;
        }

        var text_styles = 'padding-top: ' + self.css('padding-top') +
                          '; padding-right: ' + self.css('padding-right') +
                          '; padding-bottom: ' + self.css('padding-bottom') +
                          '; padding-left: ' + self.css('padding-left') +
                          '; font-size: ' + self.css('font-size') +
                          '; font-family: ' + self.css('font-family').replace(/"/g, '\'') +
                          '; font-weight: ' + self.css('font-weight') +
                          '; font-style: ' + self.css('font-style') +
                          '; width: ' + settings.width + 'px' +
                          '; min-height: '+ settings.height + 'px' +
                          '; letter-spacing: ' + self.css('letter-spacing') +
                          '; text-indent: ' + self.css('text-indent') +
                          '; border-top-width: ' + self.css('border-top-width') +
                          '; border-right-width: ' + self.css('border-right-width') +
                          '; border-bottom-width: ' + self.css('border-bottom-width') +
                          '; border-left-width: ' + self.css('border-left-width') +
                          '; border-style: solid ' +
                          '; display: block; visibility: hidden; position: absolute; z-index: -999999; top: -99999px';

        var $hidden_container = $('<div class="textarea-autoresize" style="' + text_styles + '"></div>');

        self.after($hidden_container);

        self.css('overflow', 'hidden');

        update_height();

        self.on('change keyup', function () {
            update_height();
        });

        return self;
    }
})(jQuery);
