//Variables
var at = 0;
var trigggerEvent = 0;
var i = 0, j = 0, l = 0;
var currentTarget = 0;
var fireAt = 0;
var fireAtString = 0;
var lastClickableFused = 0;
var nowClicked = 0;
var next = true;

//Arrays
var eventArr = ["one", "two", "twoTalk", "twoTalk2",
                "three", "four", // drin lassen für Schreiner und Shui Ta im Raum
                "fourTalk", "fourTalk2", "five", "fiveAll", "fiveTalk2", "six", "sixTalk", "seven", "sevenTalk",
                "sOneTalk", "sTwoTalk", "sThreeTalk", "sFourTalkStart",
                "sFourTalk1", "sFourTalk2", "sFourP3begin", "sFour_P3", "sFiveTalk", "sFiveTalk2", "sFive_P1", "sFive_P2", "sFive_P3", "sFive_P3no", "sFive_P3s",
                "sFive_P3end", "sFive_P3end2", "sFiveTalk3",
                "sFive_P4", "sSixTalk1", "sSixTalk2", "sSixTalk3", "sSixTalk4", "sSeven_P1", "sSeven_P22", "sSeven_P2",
                "vOneTalk",
                "vTwo",
                "vTwoTalk", "vFourTalk", "vFive", "vSixTalk", "vNineTalk", "vElevenTalk",
                "vFifteen", "vFourteenTalk", "vSixteen",
                "vSixteenTalk", "vEighteenTalk",
                "vEighteen", "vEighteen2",
                "v21Talk",
                "v22Talk", "v23Talk", "v25Talk", "v27Talk", "v28Talk",
                "v29Talk", "v30Talk", "v31Talk", "v32",
                "v33Talk",
                "v34Talk", "v36Talk", "v37Talk", "v38Talk", "v39Talk",
                "v40Talk", "v40Talk2", "v40Talk3", "v41Talk", "v42Talk", "v43Talk", 
				"cOneTalk", "cTwoTalk", "cThree", "cFourTalk", "cFive", "cSixAll", "cSevenTalk", "cEight"
				
                
                ];
at = eventArr[0];

var persons = ["#Frau",
               "#Neffe",
               "#Mann",

               "#Schwaegerin",
               "#Bruder",

               "#Großvater",
               "#Junge",

               "#Nichte",

               "#ShuiTa",
               "#Schreiner",
               "#Polizist",
               "#Hausbesitzerin"];


var personColors = ["#4D4D4D",
                    "#A6A6A6",
                    "#404040",

                    "#737373",
                    "#595959",

                    "#8C8C8C",
                    "#D9D9D9",

                    "#BFBFBF",

                    "#262626",
                    "#CCCCCC",
                    "#FFF",
                    "#FFF"];


var one = ["#kerzeFlamme", "#Frau", "#Neffe", "#Mann", '#Schwaegerin', "#Großvater", "#Junge", "#Bruder"], //alle schlafen + Lampe brennt
    two = ["#tabakladenTUERi",  "#ShuiTa", "#Schreiner", "#Frau", "#Neffe", "#Mann", '#Schwaegerin', "#Großvater", "#Junge", "#Bruder", "#Nichte"], //ShuiTa Klopft (schnarchen stoppt)
    twoTalk = ["#Frau", "#Neffe"],
    twoTalk2 = ["#Frau"], //Frau lacht
    three = ["#sockelFrau", "#Frau", "#tabakladenTUERi"], //Frau öffnet Tür für Schreiner und ShuiTa
    four = ["#ShuiTa", "#Schreiner", "#tabakladenTUERi"], //ShuiTa und Schreiner treten ein
    fourTalk = ["#ShuiTa", "#Frau"],
    fourTalk2 = ["#ShuiTa"],
    five = ["#sockelNeffe", "#Neffe",
            "#sockelMann", "#Mann",
            '#sockelSchwaegerin', '#Schwaegerin',
            "#sockelGroßvater", "#Großvater",
            "#sockelJunge", "#Junge",
            "#sockelBruder", "#Bruder",
            "#sockelNichte", "#Nichte"], //alle Wachen auf
    fiveAll = ["#Neffe", "#Mann", '#Schwaegerin', "#Großvater", "#Junge", "#Bruder", "#Nichte"],
    fiveTalk2 = ["#Neffe"],

    six = ["#containerShuiTa", "#kerzeFlamme"], //ShuiTa geht zu lampe und löscht diese
    sixTalk = ["#ShuiTa",  "#Mann"],
    seven = ["#ShuiTa"], //ShuiTa Schüttelt Kopf
    sevenTalk = ["#Mann", '#Schwaegerin', "#ShuiTa"],
      //  eight = [],
      //  nine = [],
      //  ten = [],
      //  eleven = [],
      //  twelve = [],
      //  thirteen = [],
      //  fourteen = [],
      //  fivteen = [],
      //  sixteen = [],
      //  seventeen = [],
      //  eighteen = [],
      //  nineteen = [],
      //  twenty = [],

    /*sOne = ["#Mann", "#Frau", "#Neffe",  '#Schwaegerin', "#Großvater", "#Junge", "#Bruder"], //Mann organisiert alle (du und du und du....)
    sTwo = ["#Junge", "#tabakladenTUERi", "#Frau", "#Neffe", "#Bruder", '#Schwaegerin', "#Alte", "#Großvater"], //Junge nickt und verschindet aus laden (Richtung Bäckerei); alle ziehen sich an
    sThree = ["#Neffe", "#Bruder", '#Schwaegerin', "#Nichte"], //Neffe, Bruder, Schwaegerin & Nichte verlassen Laden
    sFour = ["#ShuiTa", "#bett"], //ShuiTa räumt auf
    */

  sOneTalk = ["#Frau"],
  sTwoTalk = ["#Neffe"],
  sThreeTalk = ["#Mann"],

  sFourTalkStart = ["#Mann"],
  sFourTalk1 = ["#Mann", "#Schwaegerin"],
  sFourTalk2 = ["#Mann"],
  //sFourACC = ["#accMann, #accNeffe, #accSchwaegerin", "#accGroßvater", "#accFrau"],

    /*sFourACC1 = ["#accMann"],
     sFourACC2 = ["#accNeffe"],
     sFourACC3 = ["#Frau"],
     sFourACC4 = ["#Großvater"],
     sFourACC5 = ["#Schwaegerin"],
     */
  sFourP3begin = ["#Junge", "#tabakladenTUERi"],
  sFour_P3 = [ "#Junge", "#tabakladenTUERi"],

  sFiveTalk = ["#ShuiTa"],
  sFiveTalk2 = ["#Neffe"],
  sFive_P1 = ["#Neffe", "#Bruder"], // Bewegen an Ladentisch vorbei
  sFive_P2 = ["#Neffe", "#Bruder", "#tabakladenTUERi"], // Bewegen Richtung Türe vorbei
  sFive_P3 = ["#Neffe", "#Bruder", "#Nichte"],
  sFive_P3no = ["#Nichte"],
  sFive_P3s = ["#Schwaegerin"],
  sFive_P3end = ["#Schwaegerin"],
  sFive_P3end2 = ["#Schwaegerin"],
  sFiveTalk3 = ["#Schwaegerin"],
  sFive_P4 = ["#Schwaegerin", "#tabakladenTUERi"], // Drehen vor die Türe - Türe auf

  sSixTalk1 = ["#ShuiTa"],
  sSixTalk2 = ["#Mann"],
  sSixTalk3 = ["#ShuiTa"],
  sSixTalk4 = ["#ShuiTa"],

  sSeven_P1 = ["#Mann", "#bett", "bett-2", "bett-3", "bett-4", "bett-5", "bett-6", "bett-7", "bett-8"], // Mann räumt Schlafplätze vom Boden auf
  sSeven_P22 = ["#Mann"],
  sSeven_P2 = ["#Mann", "#bett", "bett-2", "bett-3", "bett-4", "bett-5", "bett-6", "bett-7", "bett-8"], // Mann legt Schlafplätze auf dem Regal ab


  vOneTalk = ["#Schreiner"], // Schreiner redet
  vTwo = ["#Rechnung"], // Rechnung fliegt zu ShuiTa
  vTwoTalk = ["#ShuiTa", "#Schreiner"], // zu viel, ernähren
  vFourTalk = ["#ShuiTa", "#Schreiner"], // wie viele Kinder
  vFive = ["#Rechnung"], // Rechnung wieder weg
  vSixTalk = ["#ShuiTa", "#Mann", "#Schreiner" ], // 20 Dollar, Nussbaum
  vNineTalk = ["#ShuiTa", "#Schreiner"], // dann weg, was
  vElevenTalk = ["#ShuiTa", "#Frau", "#Schreiner"], // zu teuer, gut gegeben, ShenTe soll kommen
  vFifteen = ["#containerSchreiner"], // geht zu Stellage
  vFourteenTalk = ["#ShuiTa"], // Sie ist ruiniert
  vSixteen = ["#containerSchreiner", "stellage_ohne-rechnung"], // nimmt Stellage und trägt zur Tür
  vSixteenTalk = ["#Schreiner", "#ShuiTa"], // auf dem Boden, Mann helfen
  vEighteen = ["#Mann"] // zu Stellage
  vEighteen2 = ["#Mann", "#stellage_ohne-rechnung-2"], // trägt 2. Stellage zur Tür
  vEighteenTalk = ["#Mann", "#Schreiner", "#ShuiTa"], // hinaus, du Hund, 20 Dollar
  v21Talk = ["#Schreiner"], // 100
  //v21 = ["#ShuiTa", "#Mann", "#stellage_ohne-rechnung-2", "tabakladenTUERi"], // Mann trägt Stellage aus Tür raus
  v22Talk = ["#Schreiner", "#ShuiTa", "#Frau"], // nach Maß, 20, quietschen
  v23Talk = ["#Schreiner", "#ShuiTa"], // legt Münzen auf Tisch
  //v24 = ["#ShuiTa", "#Mann"], // legt Münzen auf Tisch, Mann trägt 1. Stellage zurück
  v25Talk = ["#Mann"], // genug für verschnittene Bretter
  //v26 = ["#Mann"], // trägt 2. Stellage zurück
  v27Talk = ["#Schreiner"] // zu betrinken
  v28 = ["#Schreiner"] // ab
  v28Talk = ["#Mann", "#Frau", "#ShuiTa"], // amüsieren, ShuiTa = raus
  v29Talk = ["#Mann", "#ShuiTa"], // wir? Diebe
  v30Talk = ["#Mann", "#ShuiTa"], // wo Junge?
  v31Talk = ["#ShuiTa"], // Wie ihr wollt
  v32 = ["#ShuiTa", "#Polizist"], // Shui zur Tür, Polizist taucht auf
  v32Talk = ["#ShuiTa", "#Polizist"], // Beamter Viertel? Jawohl
  v33Talk = ["#ShuiTa"], // "Shui Ta"
  v34Talk = ["#ShuiTa", "#Polizist"], // schönes Wetter, bisschen warm
  v36Talk = ["#ShuiTa", "#Mann"], // vielleicht, Junge? geschnappt
  //v36 = ["#Mann"] // gibt Shui Zeichen = zu Shui fahren?
  v37Talk = ["#ShuiTa", "#Polizist", "#Frau"], // Unterschied, sei ruhig
  v38Talk = ["#ShuiTa", "#Polizist", "#Mann"], // herein, gütig, extra herein
  //v39 = ["#Polizist"] // Polizist rein, Mann wieder zu Frau? Oder vorher?
  v39Talk = ["#ShuiTa", "#Mann"], // Gäste, da gehen wir also
  v40Talk = ["#ShuiTa", "#Polizist"], // Kusine ausrichten, Rufe Straße (wer?), Was ist das?
  v40Talk2 = ["#Polizist"], //  Halt
  v40Talk3 = ["#Polizist", "#Junge"], // Woher Kuchen? von da drüben
  v41Talk = ["#Polizist", "#Frau"], // Diebstahl? wussten nix
  v42Talk = ["#Polizist"], // aufklären?
  v43Talk = ["#Polizist", "#ShuiTa"], // auf Wache, außer mir

  // //Vera Testreihenfolge
  // var one = ["#kerzeFlamme", "#Frau", "#Neffe", "#Mann", '#Schwaegerin', "#Großvater", "#Junge", "#Bruder"], //alle schlafen + Lampe brennt
  //     two = ["#tabakladenTUERi",  "#ShuiTa", "#Schreiner", "#Frau", "#Neffe", "#Mann", '#Schwaegerin', "#Großvater", "#Junge", "#Bruder", "#Nichte"], //ShuiTa Klopft (schnarchen stoppt)
  //     //twoTalk = ["#Frau", "#Neffe"],
  //     three = ["#sockelFrau", "#Frau", "#tabakladenTUERi"], //Frau öffnet Tür für Schreiner und ShuiTa
  //     four = ["#ShuiTa", "#Schreiner", "#tabakladenTUERi"], //ShuiTa und Schreiner treten ein
  //
  //     // vOneTalk = ["#Schreiner"], // Schreiner redet
  //     // //vTwo = ["#ShuiTag", "Rechnung"],
  //     // vTwoTalk = ["#ShuiTa", "#Schreiner"], // zieht Rechnung aus Tasche
  //     // vFourTalk = ["#ShuiTa", "#Schreiner"],
  //     // vSixTalk = ["#ShuiTa", "#Mann", "#Schreiner" ],
  //     // vNineTalk = ["#ShuiTa", "#Schreiner"],
  //     // vElevenTalk = ["#ShuiTa", "#Frau", "#Schreiner"],
  //     // vFourteenTalk = ["#ShuiTa"],
  //     // //vFifteen = ["#Schreiner", "#stellage_ohne-rechnung"], // nimmt Stellage und trägt zur Tür
  //     // vSixteenTalk = ["#Schreiner", "#ShuiTa"],
  //     // //vEighteen = ["#Mann", "#stellage_ohne-rechnung-2"], // trägt 2. Stellage zur Tür
  //     // vEighteenTalk = ["#Mann", "#Schreiner", "#ShuiTa"],
  //     v21Talk = ["#Schreiner"],
  //     //v21 = ["#ShuiTa", "#Mann", "#stellage_ohne-rechnung-2", "tabakladenTUERi"], // Mann trägt Stellage aus Tür raus
  //     v22Talk = ["#Schreiner", "#ShuiTa", "#Frau"],
  //     v23Talk = ["#Schreiner", "#ShuiTa"], // legt Münzen auf Tisch
  //     v25Talk = ["#Mann"],
  //     //v26 = ["#Mann"], // trägt Stellagen zurück
  //     v27Talk = ["#Schreiner"] // ab
  //     v28Talk = ["#Mann", "#Frau", "#ShuiTa"],
  //     v29Talk = ["#Mann", "#ShuiTa"],
  //     v30Talk = ["#Mann", "#ShuiTa"],
  //     v31Talk = ["#ShuiTa"],
  //     //v32 = ["#ShuiTa", "#Polizist"],
  //     v33Talk = ["#ShuiTa"],
  //     v34Talk = ["#ShuiTa", "#Polizist"],
  //     v36Talk = ["#ShuiTa", "#Mann"],
  //     v37Talk = ["#ShuiTa", "#Polizist", "#Frau"],
  //     v38Talk = ["#ShuiTa", "#Polizist", "#Mann"],
  //     v39Talk = ["#ShuiTa", "#Mann"],
  //     v40Talk = ["#ShuiTa", "#Polizist"],
  //     v40Talk2 = ["#Polizist"],
  //     v40Talk3 = ["#Polizist", "#Junge"],
  //     v41Talk = ["#Polizist", "#Frau"],
  //     v42Talk = ["#Polizist"],
  //     v43Talk = ["#Polizist", "#ShuiTa"];

  cOneTalk = ["#Frau"], // Frau redet
  cTwoTalk = ["#ShuiTa", "#Polizist"], //shui, und polizist
  cThree = ["#containerShui"]
  cFourTalk = ["#Polizist"], //vorwärts
  cFive = ["#containerPolizist"], //Polizist treibt sie
  cSixAll = ["#containerJunge", "#containerFrau", "#containerMann" ], //werden getrieben und gehen ab
  cSevenTalk = ["#Großvater"], // Guten Tag
  cEight = ["#containerGrossvater" ]; //Grossvater ab
  

// Melanie: bis Shui Ta "nichts mehr für Sie tun kann."
// Melanie 2: Der Mann: "Wenn er quathsct, bis der Junge ..." bis Shui Ta: "Ich bin außer mir, dass in meinem Lokal"
// Sören: Die Frau erschüttert: "Und wir hielten Sie für einen guten Menschen!" bis Shui Ta Er macht sich daran, den Laden aufzuräumen
// Vera: Der Schreiner: "Ich sehe, dass Sie sich bemühen" bis Shui Ta: "Vielleicht ein wenig warm"
// Cata: Die Frau: "Er hat zugesehen,als der Junge wegging!" bis Der Großvater: "Guten Tag" (und alle raus)

//Functions
//change color back to normal
function getColorOfPerson(fireAt) {
    'use strict';
    for (j = 0; j < persons.length; j++) {
        if (persons[j] === fireAt) {
            return personColors[j];
        }
    }
}

//Trigger all neccessary events at that point in the story
function storyline(currentTarget, currentEvent) {
    'use strict';
    console.log("Target= " + currentTarget);
    if (window[currentEvent].length !== 0) {
        var k = 0,
            animated = 0,
            narrate = 0;
        next = false;
        (function startNext() {

            function wait(animated) {
                document.querySelector(animated).addEventListener('animationend', function () {
                    console.log("--------------------Animation End--------------------");
                    startNext();
                });
            }
            function wait2(narrate) {
                document.querySelector(narrate).addEventListener('sound-ended', function () {
                    document.querySelector('#sockel' + fireAtString).setAttribute('material', 'color', 'black');
                    document.querySelector(fireAt).setAttribute('material', 'color', getColorOfPerson(fireAt)); //Test
                    console.log("--------------------Narration End--------------------");
                    startNext();
                });
            }
            if (k <  window[currentEvent].length) {
                next = false;
                fireAt = window[currentEvent][k];
                fireAtString = fireAt.slice(1);
                console.log("Fire at= " + fireAt);


                if (currentEvent.search("Talk") !== -1) {
                    try {
                        document.querySelector(fireAt + ' > a-sound[on=\"' + currentEvent + '\"]').emit(currentEvent);
                    } catch (err) {
                        console.log(err + " - while firing at  " + fireAt);
                    }

                    k++;
                    try {

                        if (document.querySelector(fireAt + ' > a-sound[on=\"' + currentEvent + '\"]') !== null) {
                            console.log(document.querySelector(fireAt + ' > a-sound[on=\"' + currentEvent + '\"]'));
                            narrate = "#" + document.querySelector(fireAt + ' > a-sound[on=\"' + currentEvent + '\"]').id;
                            console.log(narrate);
                        }


                        if (narrate !== null) {
                            document.querySelector('#sockel' + fireAtString).setAttribute('material', 'color', 'white');
                            document.querySelector(fireAt).setAttribute('material', 'color', 'turquoise'); //Test
                            wait2(narrate);
                        } else {
                            startNext();
                        }

                    } catch (err6) {
                        console.log("No narration at: " + currentEvent + "-->" + fireAt);
                        startNext();
                    }



                } else {
                    try {
                        document.querySelector(fireAt).emit(currentEvent);
                    } catch (err8) {
                        console.log(err8 + " - while firing at  " + fireAt);
                    }
                    k++;
                    try {
                        if (document.querySelector(fireAt + ' > a-animation[begin=\"' + currentEvent + '\"]') !== null) {
                            console.log(document.querySelector(fireAt + ' > a-animation[begin=\"' + currentEvent + '\"]'));
                            animated = "#" + document.querySelector(fireAt + ' > a-animation[begin=\"' + currentEvent + '\"]').id;
                            console.log(animated);
                        }
                        if (currentEvent.search("All") !== -1) {
                            document.querySelector('#sockel' + fireAtString).setAttribute('material', 'color', 'white');
                            document.querySelector(fireAt).setAttribute('material', 'color', 'turquoise'); //Test
                        }

                        if (document.querySelector(fireAt + ' > a-animation[class="wait"]') !== null) {
                            wait(animated);
                        } else {
                            startNext();
                        }

                    } catch (err2) {
                        console.log("No animation at: " + currentEvent + "-->" + fireAt);
                        startNext();
                    }

                }
            } else {
                next = true;
            }
        }());


        return 1;
    } else {
        return 0;
    }
}


//starts narration when .play was found
function playableFound(currentTarget) {
    'use strict';
    if (next === true) {
        if (currentTarget.search(at) !== -1) {
            currentTarget = "#" + at;
            if ((storyline(currentTarget, at)) === 1) {
                at = eventArr[++i];
            }
        }
        console.log("Next= " + at);
    }
}

//Event Methods
//$(".clickable").each(function () {
//    'use strict';
//    $(this).attr('event-animate', 'target:#cursor; event:clickableFound');
//    $(this).attr('event-animate', 'target:#cursor; event:clickableClick');
//});

//Cursor found .clickable
$(".clickable").on('fusing', function () {
    'use strict';
    if (at === "two" || at === "three") {
        currentTarget = $(this).closest("a-entity").attr("class");
        playableFound(currentTarget);

    } else {
        currentTarget = '#' + $(this).closest("a-entity").attr('id');
        console.log(currentTarget);

        trigggerEvent = "clickableFound";
        document.querySelector("#cursor").emit(trigggerEvent);
        document.querySelector(currentTarget).emit(trigggerEvent);
        lastClickableFused = currentTarget;
    }


});

//Cursor triggers click on .clickable
$(".clickable").on('click', function () {
    'use strict';
    if (at !== "two" || at !== "three" || at !== "four") {
        currentTarget = '#' + $(this).closest("a-entity").attr('id');
        trigggerEvent = "clickableClick";
        nowClicked = currentTarget;
        if (nowClicked === lastClickableFused) {
            document.querySelector("#cursor").emit(trigggerEvent);
            document.querySelector(currentTarget).emit(trigggerEvent);
        }
    }
});

//Cursor is not on .clickable
$("a-entity").on('fusing', function () {
    'use strict';
    currentTarget = "#cursor";
    trigggerEvent = "notClickable";
    document.querySelector(currentTarget).emit(trigggerEvent);
});

//trigger storyline after start was iniciated
$(".play").on('fusing', function () {
    'use strict';
    currentTarget = $(this).closest("a-entity").attr("class");
    playableFound(currentTarget);

});


//auto-enter VR (https://github.com/aframevr/aframe/issues/1473)
window.addEventListener('load', function () {
    'use strict';
    var scene = document.querySelector('a-scene');
    if (scene.hasLoaded) {
        scene.enterVR();
        //    } else {
        //        el.addEventListener('loaded', function () {
        //            scene.enterVR();
        //        });
    }
});

//Event Listener
//start storyline
document.querySelector('a-scene').addEventListener('loaded', function () {
    'use strict';
    setTimeout(function () {
        $("#giveMeTime").remove();

        currentTarget = "#one";
        at = "one";
        if ((storyline(currentTarget, at)) === 1) {
            at = eventArr[++i];

        }
    }, 5000);
});
