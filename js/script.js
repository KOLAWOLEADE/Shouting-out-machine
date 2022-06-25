$(document).ready(function(){
    $(".Club").submit(function(event){
        const FullnameInput = $("Input#Fullname").val();
        // const AgeInput  = $("Input#Age").val();
        const GenderInput = $("Input#Gender").val();


        $(".Fullname").text(FullnameInput.toUpperCase());
        // $(".Age").text(AgeInput);
        $("Gender").text(GenderInput.toUpperCase());


              $("#Story").show();
              event.preventDefault();


    });
});