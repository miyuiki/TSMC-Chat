var firebase;
var $name = ''

$(function () {
    var $btn = $('#btn'),
        $show = $('#show'),
        $reset = $('#reset'),
        $clean = $('#clean'),
        $content = $('#content'),
        $setName = $('#setName');

    var config = {
        apiKey: "AIzaSyCAtEgAwEuuLlr3WYfxsX9ZMW9BT0GuRdI",
        authDomain: "tsmc-chat-d69f2.firebaseapp.com",
        databaseURL: "https://tsmc-chat-d69f2.firebaseio.com",
        projectId: "tsmc-chat-d69f2",
        storageBucket: "tsmc-chat-d69f2.appspot.com",
        messagingSenderId: "811892083836",
        appId: "1:811892083836:web:ae105b88c822bbad"
    };
    firebase.initializeApp(config);
    var database = firebase.database().ref();

    function write() {
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        var ms = date.getTime();
        if (h < 10) {
            h = '0' + h;
        }
        if (m < 10) {
            m = '0' + m;
        }
        if (s < 10) {
            s = '0' + s;
        }
        var now = h + ':' + m + ':' + s;
        var postData = {
            name: $('#inputNmae').val(),
            content: $('#content').val(),
            time: now,
            id: 'id' + ms
        };
        database.push(postData);
        $content.val('');
    }

    $setName.on('click', function (e) {
        e.preventDefault();
        if ($('#inputNmae').val() == "") {
            // $('#show_error').show();
            return false;
        }
        $name = $('#inputNmae').val();
    });

    $btn.on('click', function () {
        write();
    });

    $content.on('keydown', function (e) {
        if (e.keyCode == 13) {
            write();
        }
    });

    $clean.on('click', function () {
        database.remove();
        $show.html('');
        // location.reload();
    });

    $reset.on('click', function () {
        // alert('work')
        $('#exampleModal').modal('show')
    });

    database.once('value', function (snapshot) {
        // $show.html('');
        // var arr = [];
        for (var i in snapshot.val()) {
            var name = snapshot.val()[i].name;
            var content = snapshot.val()[i].content;
            var time = snapshot.val()[i].time;
            if (name == $name) {
                var html = '<div class="row justify-content-end mt-3">\
                            <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true" style="width: 100%;">\
                                <div class="toast-header">\
                                    <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" \
                                    xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">\
                                        <rect width="100%" height="100%" fill="#007aff"></rect>\
                                    </svg>\
                                    <strong class="mr-auto">' + name + '</strong>\
                                    <small class="text-muted">' + time + '</small>\
                                </div>\
                                <div class="toast-body">' + content + '</div>\
                            </div>\
                        </div>'
                // arr.push(snapshot.val()[i]);
                $show.append(html);
            }
            else {
                var html = '<div class="row mt-3">\
                            <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true" style="width: 100%;">\
                                <div class="toast-header">\
                                    <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" \
                                    xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">\
                                        <rect width="100%" height="100%" fill="#007aff"></rect>\
                                    </svg>\
                                    <strong class="mr-auto">' + name + '</strong>\
                                    <small class="text-muted">' + time + '</small>\
                                </div>\
                                <div class="toast-body">' + content + '</div>\
                            </div>\
                        </div>'
                // arr.push(snapshot.val()[i]);
                $show.append(html);
            }
        }
    });

    database.limitToLast(1).on('value', function (snapshot) {
        // $show.html('');
        // var arr = [];
        for (var i in snapshot.val()) {
            var name = snapshot.val()[i].name;
            var content = snapshot.val()[i].content;
            var time = snapshot.val()[i].time;
            if (name === $name) {
                var html = '<div class="row justify-content-end mt-3">\
                            <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true" style="width: 100%;">\
                                <div class="toast-header">\
                                    <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" \
                                    xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">\
                                        <rect width="100%" height="100%" fill="#007aff"></rect>\
                                    </svg>\
                                    <strong class="mr-auto">' + name + '</strong>\
                                    <small class="text-muted">' + time + '</small>\
                                </div>\
                                <div class="toast-body">' + content + '</div>\
                            </div>\
                        </div>'
                // arr.push(snapshot.val()[i]);
                $show.append(html);
            }
            else {
                var html = '<div class="row mt-3">\
                            <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true" style="width: 100%;">\
                                <div class="toast-header">\
                                    <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" \
                                    xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">\
                                        <rect width="100%" height="100%" fill="#007aff"></rect>\
                                    </svg>\
                                    <strong class="mr-auto">' + name + '</strong>\
                                    <small class="text-muted">' + time + '</small>\
                                </div>\
                                <div class="toast-body">' + content + '</div>\
                            </div>\
                        </div>'
                // arr.push(snapshot.val()[i]);
                $show.append(html);
            }
        }
    });
});