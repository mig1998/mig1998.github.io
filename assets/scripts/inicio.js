
var divMyText = document.getElementById("divMyText")


const sou = "Ola, ,s,o,u, ,M,i,g,u,e,l, ,e,u, ,S,o,u, ,D,e,s,e,n,v,o,l,v,e,d,o,r";

const color = ['white','cyan'];

var arraysou = sou.split(",");




for (let i = 0; i < arraysou.length; i++) {

    var letra = arraysou[i]

    let num = Math.floor(Math.random() * color.length);

    var myText = document.createElement('h2')
    myText.innerHTML = letra;
    myText.id = "myText" + i;
    myText.style.display = 'inline';
    myText.style.color = color[num];

    myText.style.textShadow = "0px 0px 33px " + color[num];
    divMyText.append(myText);

}




function changeSection(section) {

    let session = document.getElementById(section)

    if (session.style.display == 'none') {
        session.style.display = 'block';
    }


}


function hideSession(section){
    let session = document.getElementById(section)

    if (session.style.display == 'block') {
        session.style.display = 'none';
    }
}