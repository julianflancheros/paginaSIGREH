function redireccionar(pagina_seleccionada) {


    // window.open('http://www.example.com?ReportID=1', '_blank'); 


    //    location.href = pagina_seleccionada; 


    window.open(pagina_seleccionada, '_blank');


}


function cambiar_version() {


    console.log("Entró a cambiar versión");


    var link = document.getElementById("select_version_ei").value;


    window.location = link;
}


function mostrar_seccion(menu_a_mostrar) {


    $(".div_menu").hide("slow");


    // $(".div_documentos").hide("slow"); 


    // El menu que se va a mostrar 


    $("#div_" + menu_a_mostrar).show("slow");


    $('.btn-wid').removeClass("btn-wid-presionado");


    $("#btn_" + menu_a_mostrar).addClass("btn-wid-presionado");


}





$(document).ready(function () {


    //    $( "#btn_informacion_general" ).trigger( "click" ); 


    $("#btn_informacion_general").trigger("click");


});





// Shorthand for $( document ).ready() 


$(function () {


    $("#select_documentos").change(function () {


        $(".div_documentos").hide('slow');


        version = $(this).val();


        console.log(version);


        $('#' + version).show('slow');


    });


});