// const  logo = document.getElementById('logo');
// console.log(logo.hasAttribute('class'));
// //console.log(logo.getAttribute(''));
// console.log(logo.setAttribute('class','prueba'));
// const menu= document.getElementsByClassName('menu');
// console.log(menu[1]);
// const enlaces = document.getElementsByTagName('a');
// console.log(enlaces);

// for(var i=0; i<enlaces;i++){
//     enlaces[i].setAttribute('target','_self');
// }



// var entrances = document.querySelector('.sidebar ul li');
// console.log(entrances);

// entrances = document.querySelectorAll('.sidebar ul li');
// console.log(entrances);



// var e1 = document.createElement('h1');

// var textNuevo = document.createTextNode('Hola MUNDO');
// e1.appendChild(textNuevo);
// console.log(e1);

// entrances[4].appendChild(e1);


// const article= document.querySelector('main article');
// console.log(article);

// article.parentElement.removeChild(article);

// const home = document.querySelector('.navegacion nav ul li a');
// console.log(home);

// home.parentElement.replaceChild(e1,home);


var counter;


function sample(){
    var input=document.getElementById('Insertar');
    var e1 = document.createElement('div');
    var textNuevo = document.createTextNode(input.value);
    var but = document.createElement('button');
    var newText = document.createTextNode("Delete");
    but.addEventListener('click', otherSample);
    var mod = document.createElement('button');
    var newNewText = document.createTextNode("Modify");
    mod.addEventListener('click', otherOtherSample)
    counter=0;
    if(input.value=="") alert('Atleast put something first e.e');
    else{
        enlaces = document.querySelectorAll('.sidebar div');
        //console.log(enlaces);
        for(var i=0; i<enlaces;i++){
            counter++;
        }
        if (counter>0) counter--;
        e1.appendChild(textNuevo);
        but.appendChild(newText);
        mod.appendChild(newNewText);
        e1.appendChild(but);
        e1.appendChild(mod);
        enlaces[counter].appendChild(e1);

    }
}


function otherSample(e){
    alert("Erased, no backsies");
    e.path[1].parentElement.removeChild(e.path[1]);
}

function otherOtherSample(e){
    alert("why hello thar");
    var enlaces = document.querySelector('.sidebar div');
    console.log(enlaces.parentElement);
    var input=document.getElementById('Insertar');
    var e1 = document.createElement('div');
    var textNuevo = document.createTextNode(input.value);
    var but = document.createElement('button');
    var newText = document.createTextNode("Delete");
    but.addEventListener('click', otherSample);
    var mod = document.createElement('button');
    var newNewText = document.createTextNode("Modify");
    mod.addEventListener('click', otherOtherSample)
    e1.appendChild(textNuevo);
        but.appendChild(newText);
        mod.appendChild(newNewText);
        e1.appendChild(but);
        e1.appendChild(mod);
        enlaces.parentElement.replaceChild(e1,enlaces)
}