function templateSweet(){
 document.getElementById('template').className='templateInicial w-auto';
// 
document.getElementById('cabeca').style.display='block';
document.getElementById('cabeca').className='';
// 
document.getElementById('main').className='pageColorInicial ';

// 
 document.getElementById('menu').className='navbar navbar-expand-lg navbar-dark bgNavInicial';
 document.getElementById('MenuUl').className='menuInicial navbar-nav m-auto  pt-2 pb-2 pr-4 pl-4 border rounded-pill border-primary colorUlInicial';
	document.querySelector('#MenuUl li').className='nav-item active mr-2 border rounded-pill bg-danger ';
// 


document.getElementById('principal').className='w-75 float-start border  rounded border-danger pageColorInicial ';
document.getElementById('conteudo').className='m-auto';

// 
document.getElementById('lateralDireito').style.display='block';
document.getElementById('lateralDireito').className='w-25 float-end border border-danger rounded bg-white';


document.getElementById('lateralEsquerdo').style.display='none';



// 
document.getElementById('rodape').className='border border-success  ms-5 w-50 text-center bg-light';



 let Menu=document.querySelectorAll('#MenuUl li a');

for(let i = 0; i <=Menu.length; i++){
    Menu[i].className = 'nav-link text-warning rounded-pill';
}


}



function templateFire(){
 document.getElementById('template').className='templateFire text-warning';
 
document.getElementById('cabeca').style.display='none';

document.getElementById('main').className='pageColorFire';

		
// 
 document.getElementById('menu').className='navbar navbar-expand-sm navbar-dark pageColorFire';

 document.getElementById('MenuUl').className='navbar-nav p-2 text-center ms-auto bgNavFire';
document.querySelector('#MenuUl li').className='nav-item active mr-2';

//
document.getElementById('principal').className='w-75 float-end border bgFire border-danger ';
document.getElementById('conteudo').className='m-auto';

//
document.getElementById('lateralDireito').style.display='none';

document.getElementById('lateralEsquerdo').style.display='block';
document.getElementById('lateralEsquerdo').className='w-25 m-auto float-start border border-danger bgFire';

//
document.getElementById('rodape').className='border border-success text-center bgFire';


 let Menu=document.querySelectorAll('#MenuUl li a');

for(let i = 0; i <=Menu.length; i++){
    Menu[i].className = 'nav-link text-warning';
}





}






function templateGirls(){
 document.getElementById('template').className='templateGirl w-auto text-light';
 
document.getElementById('cabeca').style.display='block';
document.getElementById('cabeca').className='pageColorGirl';

document.getElementById('main').className='pageColorGirl';

		
// 
 document.getElementById('menu').className='navbar navbar-expand-lg navbar-dark pageColorGirl';

 document.getElementById('MenuUl').className='navbar-nav m-auto  pt-2 pb-2 pr-4 pl-4 border rounded-pill border-primary bgNavGirl ';





//

document.getElementById('conteudo').className='m-auto';
document.getElementById('principal').className='w-50 ms-md-3 me-md-2 float-start border  rounded border-danger bgGirl ';


//
document.getElementById('lateralDireito').style.display='block';
document.getElementById('lateralEsquerdo').style.display='block';

//
document.getElementById('lateralEsquerdo').className='lateral float-start border border-danger rounded bgGirl';



document.getElementById('lateralDireito').className='lateral float-end border border-danger rounded bgGirl';

//
document.getElementById('rodape').className='clear border border-success rounded text-center bgGirl';




document.querySelector('#MenuUl li').className='nav-item active mr-2 border rounded-pill bgGirl';


 let Menu=document.querySelectorAll('#MenuUl li a');

for(let i = 0; i <=Menu.length; i++){
    Menu[i].className = 'nav-link text-primary rounded-pill';
}


}





function templateBoys(){
 document.getElementById('template').className='templateBoy text-white-50';
 
document.getElementById('cabeca').style.display='block';
document.getElementById('cabeca').className='pageColorBoy';

document.getElementById('main').className='pageColorBoy';

		
// 
 document.getElementById('menu').className='navbar navbar-expand-lg navbar-dark bg-dark';

 document.getElementById('MenuUl').className='navbar-nav m-auto  pt-2 pb-2 pr-4 pl-4 border rounded-pill border-primary bgNavBoy';





//

document.getElementById('conteudo').className='m-auto';

document.getElementById('principal').className='w-50 ms-md-3 me-md-2 float-start border  rounded border-danger bgBoy ';


//
document.getElementById('lateralDireito').style.display='block';
document.getElementById('lateralEsquerdo').style.display='block';

//
document.getElementById('lateralEsquerdo').className='lateral float-start border border-danger rounded bgBoy';



document.getElementById('lateralDireito').className='lateral float-end border border-danger rounded bgBoy';

//
document.getElementById('rodape').className='clear border border-success rounded text-center bg-dark';




document.querySelector('#MenuUl li').className='nav-item active mr-2 border rounded-pill bgBoy ';


 let Menu=document.querySelectorAll('#MenuUl li a');

for(let i = 0; i <=Menu.length; i++){
    Menu[i].className = 'nav-link text-primary rounded-pill';
}


}




