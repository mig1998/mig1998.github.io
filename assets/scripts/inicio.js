
var divMyText = document.getElementById("divMyText")




var sectionLayouts = document.getElementById("layouts")
var sectionApi = document.getElementById("consumo")
var sectionAndroid = document.getElementById("android")
var sectionc = document.getElementById("c")
var sectionJava = document.getElementById("java")





const sou = "Ola, ,s,o,u, ,M,i,g,u,e,l,<br> ,e,u, ,S,o,u, ,D,e,s,e,n,v,o,l,v,e,d,o,r";

const color = ['lightgreen', 'yellowgreen', 'green'];

var arraysou = sou.split(",");




for (let i = 0; i < arraysou.length; i++) {

    var letra = arraysou[i]

    let num = Math.floor(Math.random() * color.length);

    var myText = document.createElement('h2')
    myText.innerHTML = letra;
    myText.id = "myText" + i;
    myText.style.display = 'inline';
    myText.style.textShadow = "0px 0px 33px " + color[num];
    divMyText.append(myText);

}


function changeText() {

    for (let i = 0; i < arraysou.length; i++) {

        let text = document.querySelectorAll('#myText' + i);

        let num = Math.floor(Math.random() * color.length);

        text.forEach(element => {
            element.style.color = color[num];

        });

    }
}




function changeSection(section) {

    let session = document.getElementById(section)

    if (session.style.display == 'none') {
        session.style.display = 'block';
    }

    switch (session.id) {
        case 'layouts':
            sectionApi.style.display = 'none';
            sectionAndroid.style.display = 'none';
            sectionc.style.display = 'none';
            sectionJava.style.display = 'none';
            document.getElementById('layouts-tab').style.background='#805380';


            document.getElementById('consumo-tab').style.background='';
            document.getElementById('android-tab').style.background='';
            document.getElementById('c-tab').style.background='';
            document.getElementById('java-tab').style.background='';
            break;

        case 'consumo':
            sectionLayouts.style.display = 'none';
            sectionAndroid.style.display = 'none';
            sectionc.style.display = 'none';
            sectionJava.style.display = 'none';
            document.getElementById('consumo-tab').style.background='#805380';


            document.getElementById('layouts-tab').style.background='';
            document.getElementById('android-tab').style.background='';
            document.getElementById('c-tab').style.background='';
            document.getElementById('java-tab').style.background='';
            break;

        case 'android':
            sectionLayouts.style.display = 'none';
            sectionApi.style.display = 'none';
            sectionc.style.display = 'none';
            sectionJava.style.display = 'none';
            document.getElementById('android-tab').style.background='#805380';


            document.getElementById('layouts-tab').style.background='';
            document.getElementById('consumo-tab').style.background='';
            document.getElementById('c-tab').style.background='';
            document.getElementById('java-tab').style.background='';
            break;


        case 'c':
            sectionLayouts.style.display = 'none';
            sectionApi.style.display = 'none';
            sectionAndroid.style.display = 'none';
            sectionJava.style.display = 'none';
            document.getElementById('c-tab').style.background='#805380';


            document.getElementById('layouts-tab').style.background='';
            document.getElementById('consumo-tab').style.background='';
            document.getElementById('android-tab').style.background='';
            document.getElementById('java-tab').style.background='';

            break;


        case 'java':
            sectionLayouts.style.display = 'none';
            sectionApi.style.display = 'none';
            sectionAndroid.style.display = 'none';
            sectionc.style.display = 'none';
            document.getElementById('java-tab').style.background='#805380';


            document.getElementById('layouts-tab').style.background='';
            document.getElementById('consumo-tab').style.background='';
            document.getElementById('android-tab').style.background='';
            document.getElementById('c-tab').style.background='';

            break;
    }

}


