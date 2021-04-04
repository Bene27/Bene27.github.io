function toggleMenu(){
    if(document.getElementById("menu").style.display =='block'){
        document.getElementById("menu").style.display ='none';
    }else {
        document.getElementById("menu").style.display = 'block';
    }

    window.weatherWidgetConfig =  window.weatherWidgetConfig || [];
    window.weatherWidgetConfig.push({
        selector:".weatherWidget",
        apiKey:"K7LP4TY7CB3DMW6D58R7HDEUH", //Sign up for your personal key
        location:"Johannesburg,South Africa", //Enter an address
        unitGroup:"metric", //"us" or "metric"
        forecastDays:5, //how many days forecast to show
        title:"Johannesburg, South Africa", //optional title to show in the 
        showTitle:true, 
        showConditions:true
    });
   
    (function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
}