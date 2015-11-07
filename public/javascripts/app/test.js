define(['app/canireach', 'app/blockedurls', 'app/urlparser', 'app/bootstrap'], function (canireach, blockedurls, urlparser) {

    var updatetable = function (value) {
        // table row
        var resulttr = document.createElement('tr');
        if (value.reached) {
            resulttr.classList.add('success');
        } else {
            resulttr.classList.add('warning');
        }

        // logo
        var logotd = document.createElement('td');
        if (value.reached) {
            var newimg = document.createElement('img');
            newimg.src = value.url;
            newimg.setAttribute('style','width: 32px; height: 32px;');
            logotd.appendChild(newimg);
        }
        resulttr.appendChild(logotd);

        // site
        var sitetd = document.createElement('td');
        sitetd.innerText = urlparser.parse(value.url).host;
        resulttr.appendChild(sitetd);

        // result
        var glyphspan = document.createElement('span');
        glyphspan.classList.add('glyphicon');
        glyphspan.setAttribute('aria-hidden', 'true');
        if (value.reached) {
            glyphspan.classList.add('glyphicon-ok');
        } else {
            glyphspan.classList.add('glyphicon-remove');
        }
        var resulttd = document.createElement('td');
        resulttd.appendChild(glyphspan);
        resulttr.appendChild(resulttd);

        // append table row
        $('#results > tbody:last-child').append(resulttr);
    };

    var testblocked = function (value) {
        for (var i = 0; i < value.list.length; i++) {
            canireach.image(value.list[i].imgtest).then(updatetable);
        }
    }

    // set up event handler
    $('#start').on( "click", function() {
        blockedurls.getblocked().then(testblocked);
    });
});