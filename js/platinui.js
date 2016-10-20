/**
 * PlatinUI.js
 */
(function () {

    var $html = $('html');
    var $window = $(window);

    $(document).ready(function () {
        ui_buttons();
    });

    var aKeys = [];

    function ui_buttons() {

        $('button[data-akey]').each(function (i, e) {
            var keycode = parseInt($(e).data('akey'));
            if (typeof aKeys[keycode] == 'undefined') aKeys[keycode] = [];
            aKeys[keycode].push(e);
        });

        $window.keyup(function (e) {
            //console.log(e.which );
            if (e.altKey) {
                e.preventDefault();
                var keycode = e.which;
                if (typeof aKeys[keycode] != 'undefined') {
                    for (i in aKeys[keycode]) {
                        aKeys[keycode][i].click();
                    }
                }
            }
        });

        $html.on('focus', 'button', function (e) {
            //console.log('focus');
            var $this = $(this);
            if ($this.hasClass('default')) {
                if ($html.hasClass('button-non-default-focus')) {
                    $html.removeClass('button-non-default-focus');
                }
            } else {
                if (!$html.hasClass('button-non-default-focus')) {
                    $html.addClass('button-non-default-focus');
                }
            }
        });

        $html.on('blur', 'button', function () {
            var $this = $(this);
            if (!$this.hasClass('default')) {
                if ($html.hasClass('button-non-default-focus')) {
                    $html.removeClass('button-non-default-focus');
                }
            }
        });
    }
})();