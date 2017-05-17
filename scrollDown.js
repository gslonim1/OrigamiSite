//scroll to bottom
setInterval(function(){
    //time to scroll to bottom
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
},2000);//call every 2000 miliseconds