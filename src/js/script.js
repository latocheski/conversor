window.onload = () => {

    encodeImagem = function (e) {
        let reader         = new FileReader()
        fileName.innerHTML = arquivo.files[0].name
        fileSize.innerHTML = (arquivo.files[0].size / 1024 / 1024).toFixed(2) + 'Mb'

        reader.onload = (e) => {
            preview.src = e.target.result
            txtbase.innerHTML = preview.src.split(',')[1]

            if (preview.src.split(',')[0].includes("pdf"))
                preview.src = "./pdf.jpg"
                
        }
        reader.readAsDataURL(this.files[0])
    }

    decodeImagem = (base64) => {
        while (previewDec.hasChildNodes()) {
            previewDec.removeChild(previewDec.firstChild);
        }

        let embed  = document.createElement("embed")
        
        if (base64) {
            let prefix = base64.includes("/9j/") ? "data:image/jpeg;base64," : "data:application/pdf;base64,"          
            embed.src = prefix + base64 + "#toolbar=0"
        }
        
        embed.classList.add("embed")
        previewDec.appendChild(embed)
    }

    let btncopy    = document.getElementById('copiar')
    let btnLimpar  = document.getElementById('limpar')
    let btnDecode  = document.getElementById('decode')
    let arquivo    = document.getElementById('arquivo')
    let preview    = document.getElementById('preview')
    let imgCode    = document.getElementById('img-base-code')
    let previewDec = document.getElementById("preview-decode")

    let fileName   = document.getElementById('img-name')
    let fileSize   = document.getElementById('img-size')
    let txtbase    = document.getElementById('img-base')

    arquivo.addEventListener("change", encodeImagem)
    btnLimpar.addEventListener("click", () => {imgCode.value = ''})
    btnDecode.addEventListener("click", (e) => {decodeImagem(imgCode.value)})
    preview.addEventListener("click", (e) => decodeImagem(txtbase.textContent))
    btncopy.addEventListener("click", () => {navigator.clipboard.writeText(txtbase.innerHTML)})
};

