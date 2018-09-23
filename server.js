const express = require('express');
const app = express();
const path = require('path');


app.get('/', (req, res) => {
    res.sendFile("C:/Users/AYUSH-PC/Desktop/JS/SpeechRecognition/speechrecognition.html");
});
app.listen(3000, () => {
    console.log("App is listening on port 3000");
})