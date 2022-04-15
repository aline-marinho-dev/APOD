const date = $('#date')
const chaveapi = "EFixur4uqzTmJzfRukfYS2B1lwwfnJmL6yZ5gfyg";



$("#botao").click(function() {
    $.ajax({
    url:`https://api.nasa.gov/planetary/apod?api_key=${chaveapi}&date=${date.val()}`,
    method: "GET",

    success:function(resposta){
      $("#resposta").html(function(){
      if(resposta.media_type ==="image"){
        $('#descricao').text(resposta.explanation)
        return `<img class="imagem"src="${resposta.url}"/>`
      }else{
        $('#descricao').text(resposta.explanation)
        return `<iframe class="video" src="${resposta.url}" frameborder="0"></iframe>`;
      }


      })  
    },
    error:function(error){
        console.error(error)
    }

    })
} )


$("form").submit(function(event) {
    event.preventDefault()
} )