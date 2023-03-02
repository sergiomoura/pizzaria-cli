export function mostrarArquivoSelecionadoNoElementoImg(campoDoArquivo, elementoImg){

    campoDoArquivo.addEventListener('change', onCampoDoArquivoChange);

    function onCampoDoArquivoChange(){
        let arquivo = campoDoArquivo.files[0];
        mostrar(arquivo, elementoImg);
    }

    function mostrar(arquivo, elementoImg){
        const reader = new FileReader();
        reader.addEventListener('load',()=>{
            elementoImg.setAttribute('src', reader.result);
        })
        reader.readAsDataURL(arquivo);
    }

}