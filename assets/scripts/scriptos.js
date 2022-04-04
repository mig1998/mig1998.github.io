function templateSweet() {
    document.getElementById('template').className = 'templateInicial';
    // 
    document.getElementById('cabeca').style.display = 'block';
    document.getElementById('cabeca').className = '';
    // 
    document.getElementById('main').className = 'pageColorInicial ';

    // 
    document.getElementById('menu').className = 'navbar navbar-expand-lg navbar-dark bgNavInicial';
    document.getElementById('MenuUl').className = 'menuInicial navbar-nav m-auto  pt-2 pb-2 pr-4 pl-4 border rounded-pill border-primary colorUlInicial';
    document.querySelector('#MenuUl li').className = 'nav-item active mr-2 ';
    // 


    document.getElementById('principal').className = 'col-md-9 border-danger pageColorInicial ';


    // 
    document.getElementById('lateralDireito').style.display = 'block';
    document.getElementById('lateralDireito').className = 'col-md-3 border border-danger rounded bg-white';


    document.getElementById('lateralEsquerdo').style.display = 'none';



    // 
    document.getElementById('rodape').className = 'border border-success text-center bgfooterInicial';



    let Menu = document.querySelectorAll('#MenuUl li a');

    for (let i = 0; i <= Menu.length; i++) {
        Menu[i].className = 'nav-link rounded-pill';
    }

}



function templateFire() {

    document.getElementById('template').className = 'templateFire text-warning';

    document.getElementById('cabeca').style.display = 'none';

    document.getElementById('main').className = 'pageColorFire';


    // 
    document.getElementById('menu').className = 'navbar navbar-expand-sm navbar-dark pageColorFire';

    document.getElementById('MenuUl').className = 'navbar-nav p-2 text-center ms-auto bgNavFire';
    document.querySelector('#MenuUl li').className = 'nav-item active mr-2';

    //
    document.getElementById('principal').className = 'col-md-9 border bgFire border-danger ';


    //
    document.getElementById('lateralDireito').style.display = 'none';

    document.getElementById('lateralEsquerdo').style.display = 'block';
    document.getElementById('lateralEsquerdo').className = 'col-md-3 border border-danger bgFireLateralEsquerdo';

    //
    document.getElementById('rodape').className = 'border border-success text-center bgFireFooter';


    let Menu = document.querySelectorAll('#MenuUl li a');

    for (let i = 0; i <= Menu.length; i++) {
        Menu[i].className = 'nav-link text-warning';
    }


}






function templateGirls() {
    document.getElementById('template').className = 'templateGirl text-light';

    document.getElementById('cabeca').style.display = 'block';
    document.getElementById('cabeca').className = 'pageColorGirl';

    document.getElementById('main').className = 'pageColorGirl';


    // 
    document.getElementById('menu').className = 'navbar navbar-expand-lg navbar-dark pageColorGirl';

    document.getElementById('MenuUl').className = 'navbar-nav m-auto  pt-2 pb-2 pr-4 pl-4 border rounded-pill bgNavGirl';





    //
    document.getElementById('principal').className = 'col-md-7 ms-1 me-5 rounded border-danger bgGirl ';


    //
    document.getElementById('lateralDireito').style.display = 'block';
    document.getElementById('lateralEsquerdo').style.display = 'block';

    //
    document.getElementById('lateralEsquerdo').className = 'col-md-2 border border-danger rounded bgGirl';



    document.getElementById('lateralDireito').className = 'col-md-2 border border-danger rounded bgGirl';

    //
    document.getElementById('rodape').className = 'border border-success rounded text-center bgGirlFooter';




    document.querySelector('#MenuUl li').className = 'nav-item active mr-2';


    let Menu = document.querySelectorAll('#MenuUl li a');

    for (let i = 0; i <= Menu.length; i++) {
        Menu[i].className = 'nav-link bgNavGirl rounded-pill';
    }


}





function templateBoys() {
    document.getElementById('template').className = 'templateBoy text-white-50';

    document.getElementById('cabeca').style.display = 'block';
    document.getElementById('cabeca').className = 'pageColorBoy';

    document.getElementById('main').className = 'pageColorBoy';


    // 
    document.getElementById('menu').className = 'navbar navbar-expand-lg navbar-dark bg-dark';

    document.getElementById('MenuUl').className = 'navbar-nav m-auto  pt-2 pb-2 pr-4 pl-4 border rounded-pill border-primary bgNavBoy';





    //

    document.getElementById('principal').className = 'col-md-7 ms-1 me-5 border  rounded border-danger bgBoy ';


    //
    document.getElementById('lateralDireito').style.display = 'block';
    document.getElementById('lateralEsquerdo').style.display = 'block';

    //
    document.getElementById('lateralEsquerdo').className = 'col-md-2 border border-danger rounded bgBoy';



    document.getElementById('lateralDireito').className = 'col-md-2 border border-danger rounded bgBoy';

    //
    document.getElementById('rodape').className = 'border border-success rounded text-center bg-dark bgBoyFooter';




    document.querySelector('#MenuUl li').className = 'nav-item active mr-2';


    let Menu = document.querySelectorAll('#MenuUl li a');

    for (let i = 0; i <= Menu.length; i++) {
        Menu[i].className = 'nav-link text-white rounded-pill';
    }


}