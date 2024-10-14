const url = 'https://raw.githubusercontent.com/guilherneonrails/api/main/dados-globais.json'

async function vizualizarinformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);
}
vizualizarinformacoesGlobais()
