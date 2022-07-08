window.onload = () => {

    carregarImg = function (e) {
        let reader         = new FileReader()
        fileName.innerHTML = arquivo.files[0].name
        fileSize.innerHTML = (arquivo.files[0].size / 1024 / 1024).toFixed(2) + 'Mb'

        reader.onload = (e) => {
            preview.src = e.target.result
            txtbase.innerHTML = preview.src.split(',')[1]
        }
        reader.readAsDataURL(this.files[0])
    }

    copiar = () => {
        navigator.clipboard.writeText(txtbase.innerHTML)
    }

    zoom = (e) => {
        e.target.classList.contains('zoom') ? e.target.classList.remove('zoom') : e.target.classList.add('zoom')
    }

    let btncopy  = document.getElementById('copiar')
    let arquivo  = document.getElementById('arquivo')
    let preview  = document.getElementById('preview')

    let fileName = document.getElementById('img-name')
    let fileSize = document.getElementById('img-size')
    let txtbase  = document.getElementById('img-base')

    arquivo.addEventListener("change", carregarImg)
    preview.addEventListener("click", zoom)
    btncopy.addEventListener("click", copiar)
};

