
async function carregarDados(){
    try {
        const resposta = await fetch('./src/js/data.json');

        const dados = await resposta.json();

        const container = document.querySelector(".summary-list")

        container.innerHTML = '';
        
        dados.forEach( item  => {

         container.innerHTML += `<li class="${item.title}">
            <div class="info-list">
                <img src="${item.icon}" alt="Icon reaction"> 
                <span class="text-${item.title}">${item.category}</span>
            </div>
            <div class="info-number"> 
                <span class="text-number">${item.score}</span> 
                <span class="color-number"> / 100</span>
            </div>
          </li>`;

        });

        return dados;
        
    } catch (erro) {
        console.error('Erro ao carregar dados do JSON:', error);
    }
}

carregarDados();

