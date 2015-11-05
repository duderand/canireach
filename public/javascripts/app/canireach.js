define(['promise'], function () {
    return {
        image: function (url) {
            return new Promise(function (fulfill, reject) {
                try {
                    // create img element
                    var imgElement = document.createElement("img");

                    // set attributes
                    imgElement.setAttribute('alt', url);

                    // set success callback
                    imgElement.onload = function () {
                        this.remove();
                        fulfill({url: url,reached: true});
                    };

                    // set failure callback
                    imgElement.onerror = function () {
                        this.remove();
                        fulfill({ url: url, reached: false });
                    };

                    // try to load image
                    imgElement.setAttribute('src', url);
                }
                catch (ex) {
                    reject(ex);
                }
            });
        }
    }
});