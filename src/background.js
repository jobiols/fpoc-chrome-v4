//
// Backgroup process application.
//

var session = null;
var pooling_time = 300;

console.log('[DEBUG] esta pasando por aca - 2018-01-14');

// Function searching for new printers or remove then if disconnected.
function poolingPrinter() {
    setTimeout(function(){
            if (session) {
                console.debug("[FP] Pooling for printers");
                session.update(poolingPrinter);
                pooling_time = 6000;
            }
        }, pooling_time);
};

function open_status(sess) {
    console.log('[DEBUG] open_status');
    if (sess) {
        if (chrome.app.window.get('status') == null) {
            chrome.app.window.create('view/status.html', {
                'id': 'status',
                'bounds': {
                    'width': 700,
                    'height': 640
                },
                'minWidth': 700,
                'minHeight': 640
            }, function(sWindow) {
              sWindow.contentWindow.session = sess;
            });
        };
    } else {
        setTimeout(function() { open_status(sess); }, 1000);
    }
};

function login(callback) {
    console.debug("[SES] Start background login.");

    // Not login if exists session_id.
    if (session && session.session_id) {
        console.debug("[SES] I dont need login if a session exists.");
        return
    };

    // Login.
    console.log('[DEBUG] Antes de hacer el login');
    var xhr_login = new XMLHttpRequest;
    xhr_login.open("GET", chrome.runtime.getURL("status.json"));
    console.log('[DEBUG] despues de leer',xhr_login);
    xhr_login.onreadystatechange = function() {
      if (this.readyState == 4) {
	 console.log("[DEBUG] leyendo el json");
         console.log("[DEBUG] request finished, now parsing",xhr_login.responseText,xhr_login.responseText.server.database,xhr_login.responseText.server.host);
         //window.json_text = xhr_login.responseText;
         //window.parsed_json = JSON.parse(xhr_login.responseText);
         //console.log("[DEBUG] parse results:");
         //console.dir(window.parsed_json);
        }
     };
    //xhr_login.send();
    chrome.storage.local.get(['server', 'session_id'], function(value) {
	value.server = undefined;
	value.session_id = undefined;
        console.debug("[SES] Creating the session.", value);
        session = new oerpSession(value.server, value.session_id);
        session.addListener('login', function(s) {
            console.log("Successful login.");
            chrome.storage.local.set({
                server: session.server,
                session_id: session.session_id, });
                session.init_server_events(control_server_events);
        });
        session.addListener('logout', function(s) {
            console.debug("[SES] Logout.");
            chrome.storage.local.set({
                server: null,
                session_id: null, });
            session.session_id = null;

        });
        session.addListener('login_error', function(s) {
            console.debug("[SES] Login error. Forget session_id.");
            chrome.storage.local.set({
                'session_id': null
            });
            session.session_id = null;
            session.message = "Login error"
            open_status(session);
        });
        session.addListener('error', function(s) {
            console.debug("[SES] Session error. Forget session_id.");
            for (i in session.receptor) session.receptor[i].close();
            chrome.storage.local.set({
                'server': session.server,
                'session_id': null
            });
            session.session_id = null;
            session.message = "Session error"
            open_status(session);
        });
        session.addListener('expired', function(s) {
            console.debug("[SES] Session expired. Forget session_id.");
            for (i in session.receptor) session.receptor[i].close();
            chrome.storage.local.set({
                'server': session.server,
                'session_id': null
            });
            session.session_id = null;
            session.message = "Login expired"
            open_status(session);
        });
        session.addListener('spool_open', function(s) {
            console.debug("[SES] Open spool.");
        });
        session.addListener('spool_close', function(s) {
            console.debug("[SES] Close spool.");
        });
        session.addListener('spool_error', function(s) {
            console.debug("[SES] Error spool.");
        });
        session.addListener('spool_message', function(s) {
            console.debug("[SES] Message spool.");
        });
        session.init(callback);
    });
};

// Start login.
login(function(){
    // Set status windows when application is launched.
    chrome.app.runtime.onLaunched.addListener(function() {
        console.debug("[SYS] Launch status");
        open_status(session);
    });
    chrome.app.runtime.onRestarted.addListener(function(){
        console.debug("[SYS] Restart");
        session.clean_server_events();
    })
});

poolingPrinter();



// vim:expandtab:smartindent:tabstop=4:softtabstop=4:shiftwidth=4:
