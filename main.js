
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
classifier = m15.soundClassifier('https://teachablemachine.withgoogle.com/models/q_UciXYnD/model.json' , modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}