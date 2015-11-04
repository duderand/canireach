define(function () {
    // taken from http://stackoverflow.com/questions/6941533/get-protocol-domain-and-port-from-url
    /**
     *  Break apart any path into parts
     *  'http://example.com:12345/blog/foo/bar?startIndex=1&pageSize=10' ->
     *    {
     *      "host": "example.com",
     *      "port": "12345",
     *      "search": {
     *        "startIndex": "1",
     *        "pageSize": "10"
     *      },
     *      "path": "/blog/foo/bar",
     *      "protocol": "http:"
     *    }
     */
    return {
        parse: function (url) {
            //  create a link in the DOM and set its href
            var link = document.createElement('a');
            link.setAttribute('href', url);

            //  return an easy-to-use object that breaks apart the path
            return {
                host: link.hostname,  //  'example.com'
                port: link.port,      //  12345
                //search: processSearchParams(link.search),  //  {startIndex: 1, pageSize: 10}
                path: link.pathname,  //  '/blog/foo/bar'
                protocol: link.protocol   //  'http:'
            }
        }
    }
});