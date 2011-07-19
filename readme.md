Visavis
=======

Visavis is a page visibility helper. It allows you to check if the user is currently looking at your web page. When in doubt it assumes the page is visible.


##Usage:
```JavaScript
    
    visavis(function( state){
        // now state will be "visible" or "hidden"
        // if the browser supports the page visibility API
        // the state can also be "prerender" or "preview"
        
        doStuff();
    });
    
```

##Last but not Least

If you dont like this you might want to have a look at visibility.js[1]

mfG Hase

Links:
1: https://github.com/evilmartians/visibility.js
