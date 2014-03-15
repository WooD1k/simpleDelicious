/**
 * @aaronksaunders
 *
 * See more Appcelerator Information on Company Blog
 * blog.clearlyinnovetiove.com
 *
 */
 var TiParse = function(options) {
    FB = {
        init: function() {
            debugger;
            Ti.API.info("called FB.init()");
        },
        login: function() {
            Ti.API.info("called FB.login()");
        },
        logout: function() {
            Ti.API.info("called FB.logout()");
        }
    };
    Ti.include("parse-1.2.16.js");
    Parse.localStorage = {
        getItem: function(_key) {
            return Ti.App.Properties.getObject(_key);
        },
        setItem: function(_key, _value) {
            return Ti.App.Properties.setObject(_key, _value);
        },
        removeItem: function(_key) {
            return Ti.App.Properties.removeProperty(_key);
        }
    };
    Parse._ajax = function(method, url, data, success, error) {
        var options = {
            success: success,
            error: error
        };
        if ("undefined" != typeof XDomainRequest) return Parse._ajaxIE8(method, url, data)._thenRunCallbacks(options);
        var promise = new Parse.Promise(), handled = !1, xhr = Ti.Network.createHTTPClient({
            timeout: 5e3
        });

        xhr.onload = function() {
            if (handled)
                return;
            handled = true;
            if (xhr.status >= 200 && 300 > xhr.status) {
                Ti.API.info('xhr.readyState: ', xhr.readyState);
                Ti.API.info('xhr.status: ', xhr.status);
                var response;
                try {
                    response = JSON.parse(xhr.responseText);
                    Ti.API.info('response: ', response);
                    Ti.API.info('responseText: ', xhr.responseText);
                } catch (e) {
                    promise.reject(e);
                }
                response && promise.resolve(response, xhr.status, xhr);
            } else {
                promise.reject(xhr);
            }
        };

        xhr.onerror = function(e) {
            Ti.API.info('on error:' + e);
            if (handled)
                return;
            handled = true;
            promise.reject(xhr);
        };

        xhr.open(method, url, !0);
        xhr.setRequestHeader("Content-Type", "text/plain");
        Parse._isNode && xhr.setRequestHeader("User-Agent", "Parse/" + Parse.VERSION + " (NodeJS " + process.versions.node + ")");
        Ti.API.info('data: ', data);
        xhr.send(data);
        return promise._thenRunCallbacks(options);
    };

    Parse.initialize('VDiaJuQU9ZQZImmFbzQzPxgo8dZlpe1EwIAuXYhr', 'nNoBud95SXA8k790TzLkshHuV4hGLheZ4op9hp9A');
    Parse.FacebookUtils.init();
    return Parse;
};

module.exports = TiParse;