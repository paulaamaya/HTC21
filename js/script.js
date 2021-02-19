jQuery(document).ready(function(){
    $("#deleteme").html('Hello!');
    $("#change-button").click(function(){
        $("#deleteme").html('clicked!');
    })
});