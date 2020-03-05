/*
window.onload = function(){
    var launchbtn = document.getElementById('launchbtn');
    var getIdInput = document.getElementById('getIdInput');
   
    function performCrudeOperation(){
        var crude = {
            getIdInput : getIdInput
        }

        $.ajax({
            method : 'POST',
            url : '/getUsers',
            data : crude,
            statusCode : {
                406 : function(msg, status,jqXHR){
                    console.log(status);
                },
                200 : function(msg, status,jqXHR){
                    console.log(status);
                }
            }
        }).done(function(msg, status,jqXHR){
            console.log(jqXHR.responseJSON.data);
        }).fail(function(msg, status,jqXHR){
            console.log(status);
        });
    };

    launchbtn.addEventListener('click', function(){
        performCrudeOperation();
    });

} 

*/
