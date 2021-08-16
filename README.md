These are simple demo tests to better understand the possible benefits (and potential risks) of [https://github.com/whatwg/html/issues/6911](https://github.com/whatwg/html/issues/6911)

### [/external-import-model/](https://worker-external-importscripts.glitch.me/external-import-model/)
This demo uses a "polyfill" for `Worker.importScripts()`.  
It starts a new "blank" worker (which only imports our polyfill), and then imports two scripts from the owner context.
 - To avoid the need for "engine" scripts we need to have all the imported scripts **and their response handler**, duplicate some boilerplate code, and to agree on a common schema to communicate through the Worker's `postMessage`.
 - It is still not clear what is the benefit of being able to import these scripts from the owner context.

### [/engine-model/](https://worker-external-importscripts.glitch.me/engine-model/)
This demo uses an "engine" script in the Worker context, importing the needed scripts, which only have to define themselves on the exposed engine.
In the owner context, an other "engine" script is loaded to initiate the Worker, expose all the methods available, and handle the communication with the Worker from a single place.
 - That's two more files to include in the project, but it arguably seems easier to maintain.
 
### [/threat-model/](https://worker-external-importscripts.glitch.me/threat-model/)
This demo explores a new threat introduced by this proposal: external scripts can now access the Worker's context.
In this demo we show that a spoiled script can "squat" a worker thread to perform nefarious operations (e.g crypto-mining) in the background without blocking the UI thread, and thus with less chances of being detected by the user, even with strict CSP rules.