setInterval(function(){
        $.ajax({ url: 'http://localhost:3000/ajax', type: 'GET', dataType: 'html'})
        .done(function(data) {
            $('#container').html(data);
        })
        .fail(function() {
            console.log("Something went wrong!");
        });
    }, 1000);