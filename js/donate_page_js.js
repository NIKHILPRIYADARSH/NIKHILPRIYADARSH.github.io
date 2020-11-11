$("[data-toggle='tooltip']").tooltip({animation : true, delay : {"show":500, "hide": 5000}, placement: "right", template : 	'<div class="tooltip"  role="tooltip"><div class="arrow"></div><div class="tooltip-inner bg-success"></div></div>'});
var count=0;
$('#google_form').on("load", function(){

    if(count==0){
        $('#danger_alert').show();
        count++;
    }    
    else if(count==1){
        $('#success_alert').show();
        $('#danger_alert').hide();
        $('#google_form').tooltip('hide');
        $('#google_form').tooltip('disable');
        count--;
    }
    
}
)

