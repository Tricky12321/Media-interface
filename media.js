// Konstanter

const MaxVolume = -15;
const MinVolume = -50;


// Opret Volume Slider
$('#Volume').slider({
    min: MinVolume,
    max: MaxVolume,
    step: 1,
    formatter: function(value) {
        return 'Volume: ' + value;
    }
});

// Køre Default når siden er indlæst
window.onload = Default();

// Køres når websiden indlæses
function Default() {

    // TIlføj kendte inputs
    AddInputs("Chromecast","CC");
    AddInputs("Nobelix","NOB");
    AddInputs("Ekstern HDMI","EHDMI");
    AddInputs("Ekstern AUX","EAUX");
    UpdateInput("CC"); // Sæt nuværende input
    SetVolume(-15); // Sæt nuværende volume

}

// Tilføjer et nyt input til dropdown menuen
function AddInputs(Text, Value) {
    $("#ForstærkerInputs").append("<option value=\""+Value+"\">"+Text+"</option>");
    console.log("Tilføjet nyt forstærker input! ("+Text+" - "+Value+")");
    return "Tilføjet nyt forstærker input! ("+Text+" - "+Value+")";

}
// Sætter input i dropdown boksen
// Brug Value og ikke tekst
function UpdateInput(Value) {
    var DropdownOptions = $("#ForstærkerInputs option");
    var NumOfOptions = DropdownOptions.length;

    for (var i = 0; i < NumOfOptions; i++) {
        if (DropdownOptions[i].value == Value) {
            DropdownOptions[i].selected = true;
            break;
        }
    }
}


// Set Vplume slider værdi
function SetVolume(Value) {
    var SliderData = $('#Volume').slider().data('slider');
    SliderData.setValue(Value);
    return "Sat Volume til "+Value;
}

// Bliver kaldt når projektoren bliver tændt
function ProjektorON() {
    // TÆND PROJEKTOR KODE
    console.log("Tændt Projektor!");

}
// Bliver kaldt når projektoren bliver slukket
function ProjektorOFF() {
    // SLUK PROJEKTOR KODE
    console.log("Slukket Projektor!");

}
// Bliver kaldt hvergang volume bliver ændret i UI
function VolumeChanged_EVENT() {
    var VolumeVal = $('#Volume').slider().data('slider').getValue();
    console.log("Volume sat til "+VolumeVal);
    return VolumeVal;
}

function SkiftInput_EVENT() {
    var NytInput = $("#ForstærkerInputs").val();
    var NytInputText = $( "#ForstærkerInputs option:selected" ).text();
    console.log("Skiftet input til ("+NytInputText+" - "+NytInput+")");
    return NytInput;
}