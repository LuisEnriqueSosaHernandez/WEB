$("#txtPass").complexify({},function(valid,complexity){
    console.log(valid,complexity);
    var $progressBar = $("#progressBar");

    $progressBar.css('width',complexity+'%');
    if(complexity>=40){
        $progressBar.addClass("progress-bar-success").removeClass("progress-bar-danger");
    }else{
        $progressBar.addClass("progress-bar-danger").removeClass("progress-bar-success");
    }
});