///// chamando css de transicao
function noHover(id, classes) {
    document.getElementById(id).className = classes;
}

function Hover(id, classes) {
    document.getElementById(id).className = classes;
}




//JQUERY

$(document).ready(function() {

    ////// WEB SERVICE DO CEP//////////////////////////////////////
    ////// WEB SERVICE DO CEP//////////////////////////////////////
    ////// WEB SERVICE DO CEP//////////////////////////////////////
    ////// WEB SERVICE DO CEP//////////////////////////////////////


    //link do webService https://viacep.com.br/

    //abrir o servico do Cep

    $('#btnGetCep').click(function() {
        var cep = $('#cep').val();

        //validando os campos de texto

        if (cep == "") {
            alert('o campo CEP esta vazio!');

        } else if (cep.length < 8) {

            alert('digite a quantidade correta de caracteres!');


        } else {

            carregarCep(cep);

        }
    })







    $('#btnGetAll').click(function() {

        var uf = $('#uf2').val();
        var localidade = $('#local2').val();
        var rua = $('#rua2').val();

        //validando os campos de texto!
        if (uf == "" || localidade == "" || rua == "") {
            alert("algum dos campos UF,LOCALIDADE,RUA esta vazio!");


        } else {

            carregarRua(uf, localidade, rua);

        }
    })



    //comeco da funcao do CEP
    function carregarCep(cep) {
        $.getJSON("https://viacep.com.br/ws/" + cep + "/json/", function(data) {

            //verificando se os dados existem(de acordo com a dcumentacao do service!)
           var elemento="<ul>";

            if (!("erro" in data)) {
                elemento+="<br>";
                elemento+="<hr>";
            elemento+="<li> <span>Rua:</span><br>"+data.logradouro+"</li>"
            elemento+="<li> <span>Bairro:</span><br>"+data.bairro+"</li>"
            elemento+="<li> <span>Local:</span><br>"+data.localidade+"</li>"
            elemento+="<li> <span>UF:</span><br>"+data.uf+"</li>"
                elemento+="<hr>";
                elemento+="<br>";
            } else {

                alert("Cep não existe, ou digitado de forma errada!");
                $('#cep').val("");
            }

            elemento+="<ul>";
            $('#getCep').html(elemento);
        });
    }
    //fim funcao CEP!



    //COMECO DA FUNCAO DE ENDERECO,UF,LOCAL
    function carregarRua(uf, Localidade, Rua) {
        $.getJSON("https://viacep.com.br/ws/" + uf + "/" + Localidade + "/" + Rua + "/json/", function(data) {

            var elemento = "<ul>";


            $.each(data, function(i, valor) {
                elemento += "<br>";
                elemento += "<hr>";
                elemento += "<li> <span>Cep:</span><br> " + valor.cep + "</li>";
                elemento += "<li> <span>Rua:</span><br> " + valor.logradouro + "</li>";
                elemento += "<li> <span>Bairro:</span><br> " + valor.bairro + "</li>";
                elemento += "<li> <span>Cidade:</span><br> " + valor.localidade + "</li>";
                elemento += "<li> <span>UF:</span><br>" + valor.uf + "</li>";
                
                elemento += "<hr>";
                elemento += "<br>";




            });

            elemento += "</ul>";

            $('#getAll').html(elemento);
        });
    }
    //FIM DA FUNCAO D ENDERECO,UF,LOCAL



    //////////////////////////////////// FIM WEBSERVICE DO CEP//////////////////////////////
    //////////////////////////////////// FIM WEBSERVICE DO CEP//////////////////////////////
    //////////////////////////////////// FIM WEBSERVICE DO CEP//////////////////////////////







    /////////////////////////////// COMECO BIBLIA SERVICE ////////////////////////////////////
    /////////////////////////////// COMECO BIBLIA SERVICE ////////////////////////////////////
    /////////////////////////////// COMECO BIBLIA SERVICE ////////////////////////////////////
    /////////////////////////////// COMECO BIBLIA SERVICE ////////////////////////////////////


    //link do webService https://bibleapi.co/



    //pegar Paragrafo
    function pegarParagrafo(abbrev, capitulo) {
        $.getJSON("https://www.abibliadigital.com.br/api/verses/nvi/" + abbrev + "/" + capitulo + "", function(data) {


            paragrafo = '<h1 class="titulo" >' + data.book.name + '</h1>';

            paragrafo += '<hr>';

            $.each(data.verses, function(i, valor) {

                paragrafo += '<p class="paragrafo">' + valor.number + ': ' + valor.text + '</p>';
            });


            $('#versos').html(paragrafo);
        });


    } //fim pegarParagrafo



    //-----------------------------------------------------------------------------------------------------
    //recuperar informacoes
    function livrosInformacao(abbrev) {
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://www.abibliadigital.com.br/api/books/" + abbrev,
            "method": "GET"
        };



        $.ajax(settings).done(function(data) {

            var i = 1;

            var elementoCapitulos = '<option>selecione um capitulo...</option>';


            while (i <= data.chapters) {

                elementoCapitulos += '<option value="' + i + '">' + i + '</option>';

                i++;
            }

            $('#capitulos').html(elementoCapitulos);



            // ao mudar capitulo
            $('#capitulos').change(function() {
                var capitulo = $('#capitulos').val();
                pegarParagrafo(abbrev, capitulo);
            });



        }); //fim ajax


    } // fim livros informacao
    function livrosInformacao(abbrev) {
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://www.abibliadigital.com.br/api/books/" + abbrev,
            "method": "GET"
        };



        $.ajax(settings).done(function(data) {

            var i = 1;

            var elementoCapitulos = '<option>selecione um capitulo...</option>';


            while (i <= data.chapters) {

                elementoCapitulos += '<option value="' + i + '">' + i + '</option>';

                i++;
            }

            $('#capitulos').html(elementoCapitulos);



            // ao mudar capitulo
            $('#capitulos').change(function() {
                var capitulo = $('#capitulos').val();
                pegarParagrafo(abbrev, capitulo);
            });



        }); //fim ajax


    } // fim livros informacao



    //----------------------------------------------------------------
    //pega as informacao do livro ao mudar 
    $('#livros').change(function() {
        var livroABBREV = $('#livros').val();
        livrosInformacao(livroABBREV);
    });




    // pegarAbrev e livro
    $('#livraria').change(function(){
        var livroABBREV = $('#livraria').val();
        livrosInformacao(livroABBREV);
    });

    



    // $('#livraria').click(function(){
    //     pegarLivro();
    // });
    
    // function pegarLivro() {
    //     const settings = {
    //         "async": true,
    //         "crossDomain": true,
    //         "url": "https://www.abibliadigital.com.br/api/books/",
    //         "method": "GET"
    //     };



    //     $.ajax(settings).done(function(data) {

    //         var i = 1;

    //         var elementoLivros = '<option>selecione um capitulo...</option>';



    //         $.each(data, function(i, valor) {

    //             elementoLivros += '<option value="' + valor.abbrev.pt + '">' + valor.name + '</option>';

            
            
    //         });


    //         $('#livraria').html(elementoLivros);



    //     }); //fim ajax


    // } // fim livros informacao

    ////////////////////////////////FIM BIBLIA SERVICE/////////////////////////////////////











});
//fim (document).ready();