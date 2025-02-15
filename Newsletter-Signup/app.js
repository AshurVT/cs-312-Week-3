//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https")


const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.post ("/", function(req, res){
    const firstName = req.body.FirstN;
    const lastName = req.body.LastN;
    const email = req.body.Email;

    const data = 
    {
        members: 
        [
            {
                email_address: email,
                status: "subscribed",
                merge_fields:
                {
                    FIRSTN: firstName,
                    LASTN: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us17.api.mailchimp.com/3.0/lists/006d81c230";

    const options = 
    {
        method: "POST",
        auth: "Ashur1:"
    }


    const request = https.request(url, options, function(response)
{
    if (response.statusCode === 200)
        {
            res.sendFile(__dirname + "/success.html");
        }
        else
        {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function(data)
        {
            console.log(JSON.parse(data));
        })
})


request.write(jsonData);
request.end();
});


app.get("/", function(req,res)
{
    res.sendFile(__dirname + "/signup.html");
});


app.post("/failure", function(req,res) 
{
    res.redirect("/");
});


app.post("/success", function(req, res)
{
    res.redirect("/");
});


app.listen(process.env.PORT || 3000, function()
{
    console.log("server Started");
});



