module.exports.getDate = function () 

    {
    var today = new Date();
    
        var options = 
        {
            weekday: 'long',
            day: "numeric",
            month: "long",
        };
    
        return day = today.toLocaleDateString("en-US", options);
        
    }
    
    module.exports.getDay = function () 
    
    {
    var today = new Date();
    
        var options = 
        {
            weekday: 'long',
           
        };
    
        return day = today.toLocaleDateString("en-US", options);
        
    }