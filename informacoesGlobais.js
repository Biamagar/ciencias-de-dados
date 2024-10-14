const url = 'https://raw.githubusercontent.com/guilhermeonrils/api/main/dados-globais.json'

async function vizualizarinformacoesGlobais() {
  const res = await fetch(ur1)
  const dados = await res.json ()
  console.log(dados);
}

vizualizarinformacaoesGlobais()
