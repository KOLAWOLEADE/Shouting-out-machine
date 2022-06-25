$(document).ready(function(){
    $(".Club").submit(function(event){
        const FullnameInput = $("Input#Fullname").val();
        const StateInput  = $("Input#State").val();
        const GenderInput = $("Input#Gender").val();


        $(".Fullname").text(FullnameInput.toUpperCase());
        $(".State").text(StateInput.toUpperCase());
        $("Gender").text(GenderInput.toUpperCase());


              $("#Story").show();
              event.preventDefault();


    });
});