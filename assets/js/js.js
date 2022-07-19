function consultar(){	
    let url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/';

    let objXmlHttpRequest = new XMLHttpRequest;

    objXmlHttpRequest.open('GET', url);
    objXmlHttpRequest.onreadystatechange = () => {
        
        if(objXmlHttpRequest.readyState == 4 && objXmlHttpRequest.status == 200){
            let dadosText = objXmlHttpRequest.responseText;
            let dadosLocalidade = JSON.parse(dadosText);
            let selecaoEstado = document.getElementById("selecaoEstado");
          
            dadosLocalidade.forEach(function(valor, idx, array){
                let option = document.createElement("option");
                option.value = valor.nome;
                option.text = valor.nome;
                selecaoEstado.appendChild(option);      
           });
        }
    }
    objXmlHttpRequest.send();
   
}







