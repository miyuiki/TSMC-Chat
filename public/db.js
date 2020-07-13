var firebase;
$(function () {
    var $btn = $('#btn'),
        $show = $('#show');
        $clean = $('#clean')

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
            name: $('#name').val(),
            content: $('#content').val()
        };
        database.push(postData);
    });

    $clean.on('click', function(){
        database.remove();
    });
    
    database.on('value', function(snapshot) {
        $show.html('');
        var arr = [];
        for(var i in snapshot.val()){
           arr.push(snapshot.val()[i]);
           $show.append('<span>'+snapshot.val()[i].name+' 說：'+snapshot.val()[i].content+'</span><br/>');
        }
      });

});