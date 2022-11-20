$(function(){
    $('.enter').click(function(){
        alert($( ".input" ).val());
    });
    $('body').on('click', '.password-control', function(){
        if ($('#password-input').attr('type') == 'password'){
            $(this).html('Hide');
            $('#password-input').attr('type', 'text');
        } else {
            $(this).html('Show');
            $('#password-input').attr('type', 'password');
        }
        return false;
    }); 
});
function addNumber(e){
    var v = $( ".input" ).val();
    $( ".input" ).val( v + e.value );
}
function clearForm(e){
    $( ".input" ).val( "" );
}
function cancelForm(e){
    var $myInput = $('.input');
    $myInput.val($myInput.val().slice(0, -1));
 }
 
 
