define(['promise'], function () {
    return {
        getblocked: function () {
            return new Promise(function (fulfill, reject) {
                var jqXHR = $.ajax({
                    url: '/list',
                    success: jQuery.noop,
                    dataType: 'json'
                })
                .done(function(data, textStatus, jqXHR ) {
                    fulfill(data);
                })
                .fail(function(jqXHR, textStatus, errorThrown ) {
                    reject(errorThrown);
                });
            });
        }
    }
});