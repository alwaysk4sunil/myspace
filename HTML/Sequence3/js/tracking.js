var tracking_data = 
{
    "tracking_element_id1": {
        "tracking_element_id": "997BCD1B-899F-470D-B7EE-19EC9B761C5E",
        "tracking_name": "ParentSlide",
        "internal_name": "SUMMARY",
        "version": "1.0.0",
		"external_name": "SUMMARY",
    }   
}
var dt=(new Date()).toISOString();
function trackAction(arg1){
	try{var tracking_id=tracking_data[arg1]["tracking_element_id"];}
	catch(err){};
	try{var tracking_name=tracking_data[arg1]["tracking_name"];}
	catch(err){};
	try{var internal_name=tracking_data[arg1]["internal_name"];}catch(err){};
	try{var version=tracking_data[arg1]["version"];}catch(err){};
	try{var external_name=tracking_data[arg1]["external_name"];}catch(err){};
	//alert("tracking_id: "+tracking_id+"tracking_name :"+tracking_name+"Usage_Start_Time_vod__c:"+dt);
	//var servey=tracking_id+"::"+internal_name+"::"+version+"::"+external_name;
	var clickStream = {};
	clickStream.Track_Element_Id_vod__c = ""+tracking_id;  
	clickStream.Track_Element_Type_vod__c= ""+tracking_name;        //captures FUT or trcaking_id
	clickStream.Track_Element_Description_vod__c= ""+external_name;  //captures the element on which the action is done
	clickStream.pagename__c = ""+internal_name;  
	clickStream.Usage_Start_Time_vod__c = ""+dt;                              //captures the page name where event occured
    //clickStream.Question_vod__c = ""+servey;  //pass the required concated string
	com.veeva.clm.createRecord("Call_Clickstream_vod__c",clickStream,saveData);
 }
 
 
 function saveData(){
	var recoreCreated=JSON.stringify(result);
	//alert(recoreCreated);
 }
// trackAction('tracking_element_id1');
