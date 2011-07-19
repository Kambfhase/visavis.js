/* Visavis - A page visibility helper
 * 2011, Kambfhase
 * MIT-License
 */
var visavis= (function( window, document, undefined){

// add a prefix to the name and uppercase the first
// letter if the prefix is not ''
function setPrefix( name, prefix){
    return (''+ prefix=== prefix)?( prefix? prefix+ name.charAt().toUpperCase()+ name.substr( 1): name) : undefined /* aka prefix */ ;
}

// finds the prefix for an API
function getPrefix( name, base, c, d, e){
    for(e="o5ms5moz5webkit5".split(c=5);c--&&!(setPrefix(name,e[c])in base););
    return e[c];
}

var reqPrefix= getPrefix( "requestAnimationFrame", window), 
    visPrefix= getPrefix( "hidden", document), cache;

// if the document visibility API exists use it.
if( typeof visPrefix == "string"){
    cache = setPrefix( "hidden", visPrefix);
    return function( callback){
        callback( document[ cache] ? "hidden": "visible");
    };
}

// If we have the reqAF API we can use it to 
// emulate page visibility
if( typeof reqPrefix == "string"){
    cache = window[ setPrefix( "requestAnimationFrame", reqPrefix)];
    
    return function( callback){
        window.setTimeout( function(){
            if( callback){
                callback( "hidden");
                callback = null;
            }
        }, 50);
        cache( function(){
            if( callback){
                callback( "visible");
                callback = null;
            }
        });
    };
}

// In the very case fall back to visible.
return function( callback){
    callback( "visible");
};

})(window, document);