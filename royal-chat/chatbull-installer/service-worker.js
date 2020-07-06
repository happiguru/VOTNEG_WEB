self.addEventListener('push', function (event) {
    console.log('Received a push message', event);
    if (event.data) {
        console.log('message data', event.data);
        console.log('message data', event.data.text);
        var output = event.data.text();
        console.log(output);
    }

    var title = 'Yay a message.';
    var body = 'We have received a push message.';
    var icon = 'assets/cmodule/icon/android-chrome-144x144.png';
    var tag = 'push-notification';

    event.waitUntil(self.registration.showNotification(title, {
        body: body,
        icon: icon
    }));
});

self.addEventListener('notificationclick', function (event) {
    //event.notification.close();
});
