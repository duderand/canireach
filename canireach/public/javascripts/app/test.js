define(['app/canireach', 'app/blockedurls', 'app/urlparser', 'app/bootstrap'], function (canireach, blockedurls, urlparser) {
    // set up event handler
    $('#start').on( "click", function() {
        var urls = blockedurls.getPT();

        var updatetable = function (value) {
            //console.log('' + value.url + ' reachable: ' + value.reached);
            var urlparsed = urlparser.parse(value.url);
            var newtr = '<tr>';
            newtr += '<td>' + '<img src="' + value.url + '" style="width: 32px; height: 32px;"/>' + '</td>';
            newtr += '<td>' + urlparsed.host + '</td>';
            var status = '';
            if (value.reached) {
                status = '<span class="glyphicon glyphicon-ok btn-success" style="width: 32px; height: 32px;" aria-hidden="true"></span>';
            } else {
                status = '<span class="glyphicon glyphicon-remove btn-danger" style="width: 32px; height: 32px;" aria-hidden="true"></span>';
            }
            newtr += '<td>' + status + '</td>';
            newtr += '</tr>';
            $('#results > tbody:last-child').append(newtr);
        };

        for (var i = 0; i < urls.length; i++) {
            canireach.image(urls[i]).then(updatetable);
        }
    });
});