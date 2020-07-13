var firebase;
var $name = ''

$(document).ready(function () {
    // var form = $('form');
    var submit = $('button[type="submit"]');
    submit.on('click', function (e) {
        e.preventDefault();
        if($('#inputNmae').val() == ""){
            // $('#show_error').show();
            return false;
        }
        $name = $('#inputNmae').val();
    });
});
$(function () {
    var $btn = $('#btn'),
        $show = $('#show'),
        $reset = $('#reset')
        $clean = $('#clean');

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

    $btn.on('click', function () {
        var postData = {
            name: $name,
            content: $('#content').val()
        };
        database.push(postData);
    });

    $clean.on('click', function () {
        database.remove();
    });

    $reset.on('click', function() {
        // alert('work')
        $('#exampleModal').modal('show')
    });

    database.on('value', function (snapshot) {
        $show.html('');
        var arr = [];
        for (var i in snapshot.val()) {
            arr.push(snapshot.val()[i]);
            $show.append('<div class="row"><span class="rounded">' + snapshot.val()[i].name + ':' + snapshot.val()[i].content + '</span></div>');
        }
    });

});