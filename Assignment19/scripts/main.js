$(document).ready(function () {

    //List Titles
    var appendUrl = 'http://jsonplaceholder.typicode.com/posts?userId=1';

    // And this is how I started this ... :( //
    
    /* var app = $('#append');
    
    for (i = 0; i < appendUrl.length;){
        app += ''
    }
    
    $('app').append('#append');
    
    $.get('appendUrl', function (response) {
        $('.fl').html(response);
    }); */
    
    // .................................... //
    
    $.get(appendUrl, function(response){
        var ul = $('#append');
        
        for (var i = 0; i < response.length; i++){
            var post = response[i];
            var li = '<li>Index: ' + (i+1) + ' <br>Title: ' + post.title + '</li><br>';
            ul.append(li);
        }
    })


    //List Titles
    var prependUrl = 'http://jsonplaceholder.typicode.com/photos?albumId=1';
    
    $.get(prependUrl, function(response){
        var ul = $('#prepend');
        
        for (var i = 0; i < response.length; i++){
            var post = response[i];
            var li = '<li>Index: ' + (i+1) + ' <br>Title: ' + post.title + '</li><br>';
            ul.prepend(li);
        }
    })


});