///// chamando css de transicao
function noHover(id, classes) {
    document.getElementById(id).className = classes;
}

function Hover(id, classes) {
    document.getElementById(id).className = classes;
}




//JQUERY

$(document).ready(function() {
    //invisivel ao carregar
    $('.formCep').attr('style', 'display:none;');
    $('.bibliaTemplate').attr('style', 'display:none;');
    $('.btnVoltarPrincipal').attr('style', 'display:none;');
    $('.principalPhpWeb p.textoCep').attr('style', 'display:none;');
    $('.principalPhpWeb p.textoBiblia').attr('style', 'display:none;');




    //voltar a pagina inicial
    $('.btnVoltarPrincipal').click(function() {
        voltarLayout();
    });




    //butao de voltar 
    //butao de voltar 
    //butao de voltar 
    function voltarLayout() {
        //servicos
        $('.formCep').attr('style', 'display:none;');
        $('.bibliaTemplate').attr('style', 'display:none;');

        //esconde btn
        $('.btnVoltarPrincipal').attr('style', 'display:none;');


        //textos
        $('#resultado').attr('style', 'display:none;');


        $('.principalPhpWeb p').attr('style', 'display:block;');
        $('.principalPhpWeb p.textoCep').attr('style', 'display:none;');
        $('.principalPhpWeb p.textoBiblia').attr('style', 'display:none;');

        //img
        $('.principalPhpWeb section.templatePhpWeb img').attr('style', 'display:block;');



    }


    //abrindo os servicos 
    //abrindo os servicos 
    //abrindo os servicos 
    function abrirServiceCep() {
        $('.formCep').attr('style', 'display:block');
        $('.btnVoltarPrincipal').attr('style', 'display:block;');
        $('.principalPhpWeb p').attr('style', 'display:none;');
        $('.principalPhpWeb p.textoCep').attr('style', 'display:block;');
        $('.principalPhpWeb section.templatePhpWeb img').attr('style', 'display:none;');

        $('#resultado').attr('style', 'display:block;');

    }




    function abrirBibliaService() {
        $('div.bibliaTemplate').attr('style', 'display:block;');
        $('.btnVoltarPrincipal').attr('style', 'display:block;');
        $('.principalPhpWeb p').attr('style', 'display:none;');
        $('.principalPhpWeb p.textoBiblia').attr('style', 'display:block;');
        $('.principalPhpWeb section.templatePhpWeb img').attr('style', 'display:none;');
    }




    ////// WEB SERVICE DO CEP//////////////////////////////////////
    ////// WEB SERVICE DO CEP//////////////////////////////////////
    ////// WEB SERVICE DO CEP//////////////////////////////////////
    ////// WEB SERVICE DO CEP//////////////////////////////////////


    //link do webService https://viacep.com.br/

    //abrir o servico do Cep
    $('.principalPhpWeb section.templatePhpWeb img.imgCEP').click(function() {
        abrirServiceCep();
    });


    $('#btnBuscar').click(function() {
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







    $('#btnBuscar2').click(function() {

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

            if (!("erro" in data)) {

                $('#rua').attr('value', data.logradouro);
                $('#bairro').attr('value', data.bairro);
                $('#local').attr('value', data.localidade);
                $('#uf').attr('value', data.uf);

            } else {

                alert("Cep não existe, ou digitado de forma errada!");
                $('#cep').val("");
            }

        });
    }
    //fim funcao CEP!



    //COMECO DA FUNCAO DE ENDERECO,UF,LOCAL
    function carregarRua(uf, Localidade, Rua) {
        $.getJSON("https://viacep.com.br/ws/" + uf + "/" + Localidade + "/" + Rua + "/json/", function(data) {

            var elemento = "<ul>";


            $.each(data, function(i, valor) {

                elemento += "<li> Cep: " + valor.cep + "</li>";
                elemento += "<li> Rua: " + valor.logradouro + "</li>";
                elemento += "<li> Bairro: " + valor.bairro + "</li>";
                elemento += "<li> Cidade: " + valor.localidade + "</li>";
                elemento += "<li> UF: " + valor.uf + "</li>";
                elemento += "<br>";
                elemento += "<hr>";
                elemento += "<hr>";
                elemento += "<br>";




            });

            elemento += "</ul>";

            $('#resultado').html(elemento);
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

    $('.principalPhpWeb section.templatePhpWeb img.imgBiblia').click(function() {
        abrirBibliaService();

    })


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



    //----------------------------------------------------------------
    //pega as informacao do livro ao mudar 
    $('#livros').change(function() {
        var livroABBREV = $('#livros').val();
        livrosInformacao(livroABBREV);
    });




    ////////////////////////////////FIM BIBLIA SERVICE/////////////////////////////////////











});
//fim (document).ready();