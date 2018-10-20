// JavaScript Document

jQuery(".input-group input[type=search]").focus(function(event){
       jQuery("#navbar").addClass("dimmed");
       jQuery("#search-block-form").addClass("sbox");
});

jQuery(".input-group input[type=search]").blur(function(event){
       jQuery("#navbar").removeClass("dimmed");
       jQuery("#search-block-form").removeClass("sbox");
});