Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

    camera = document.getElementById("camera");
Webcam.attach( '#camera' );


function takesnap(){
    Webcam.snap(function(data_uri){document.getElementById("result").innerHTML = '<img id="capimg" src="'+data_uri+'"></img>'});
        
    
}

console.log("ml5 version -", ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/SsuepuXzc/model.json",modeloaded)
function modeloaded(){
    console.log("Model Loaded!")
}

function speak(){
    var synth = window.speechSynthesis;
    speakdata_1 = "the first prediction is" + prediction1;
    speakdata_2 = "the second prediction is" + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speakdata_1 + speakdata_2);
    synth.speak(utterThis);
}

function identify(){
    img = document.getElementById('capimg');
    classifier.classify(img, gotResult);
}
function gotResult(error,results){
    if (error){
        console.error(error);
        document.getElementById('result_emotion_name').innerHTML = "error";
    }
    else{
        console.log(results);
        document.getElementById('result_emotion_name').innerHTML = results[0].label;
        document.getElementById('result_emotion_name2').innerHTML = results[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        speak();
        if (results[0].label == "happy"){
            document.getElementById("update_emoji").innerHTML == "&#128512;";
        }
        if (results[0].label == "sad"){
            document.getElementById("update_emoji").innerHTML == "&#128546;";
        }
        if (results[0].label == "angry"){
            document.getElementById("update_emoji").innerHTML == "&#128545;";
        }
        if (results[1].label == "happy"){
            document.getElementById("update_emoji2").innerHTML == "&#128512;";
        }
        if (results[1].label == "sad"){
            document.getElementById("update_emoji2").innerHTML == "&#128546;";
        }
        if (results[1].label == "angry"){
            document.getElementById("update_emoji2").innerHTML == "&#128545;";
        }
    }
}

    

