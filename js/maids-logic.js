/* ─────────────────────────────
    LÓGICA (Protocolo Versalhes)
   ───────────────────────────── */

function atualizarFundoPorHorario() {
    const perfilView = document.getElementById('perfilMaid');
    if (!perfilView) return;

    const hora = new Date().getHours();
    let imagemFundo = '';

    if (hora >= 5 && hora < 12) {
        imagemFundo = "url('/assets/images/background/bg_manha.png')";
    } else if (hora >= 12 && hora < 18) {
        imagemFundo = "url('/assets/images/background/bg_tarde.png')";
    } else {
        imagemFundo = "url('/assets/images/background/bg_noite.png')";
    }

    perfilView.style.setProperty('--bg-periodo', imagemFundo);
}

function inicializarCatalogo() {
    const carrossel = document.getElementById('carrosselMaids');
    if (!carrossel || typeof maidsData === 'undefined') return;

    atualizarFundoPorHorario();

    carrossel.innerHTML = '';
    maidsData.forEach((maid, index) => {
        const thumb = document.createElement('div');
        thumb.className = `maid-thumb ${index === 0 ? 'ativa' : ''}`;
        thumb.style.setProperty('--cor-maid', maid.color);
        thumb.onclick = () => selecionarMaid(index);
        
        const primeiroNome = maid.name.split(' ')[0];

        thumb.innerHTML = `
            <div class="moldura-thumb">
                <img src="${maid.avatar}" alt="${maid.name}">
            </div>
            <span>${primeiroNome}</span>
        `;
        carrossel.appendChild(thumb);
    });

    selecionarMaid(0);
    checarSetas();

    carrossel.addEventListener('scroll', () => {
        clearTimeout(window.scrollTimer);
        window.scrollTimer = setTimeout(checarSetas, 100);
    });
}

function selecionarMaid(index) {
    const maid = maidsData[index];
    const catalogo = document.getElementById('catalogoMaids');
    const perfilView = document.getElementById('perfilMaid');

    if(catalogo) catalogo.style.setProperty('--cor-maid', maid.color);

    if (perfilView) {
        perfilView.classList.remove('animar-entrada');
        void perfilView.offsetWidth; 
        perfilView.classList.add('animar-entrada');
    }

    // 1. Identidade
    const idsSimples = {
        'idSerial': `${maid.serial} // ${maid.alcunha}`,
        'nomeMaid': maid.name,
        'tituloOperacional': maid.titulo
    };

    for (const [id, value] of Object.entries(idsSimples)) {
        const el = document.getElementById(id);
        if (el) el.innerText = value;
    }

    // 2. Parágrafos de Resumo e Modus Operandi
    const idsParagrafos = {
        'resumoExecutivo': maid.manifestacao,
        'detalheProtocolo': maid.modus_operandi,
        'detalheRuptura': maid.ruptura
    };

    for (const [id, value] of Object.entries(idsParagrafos)) {
        const el = document.getElementById(id);
        if (el) el.innerHTML = `<p class="versalhes-paragrafo">${value}</p>`;
    }
    
    const bgImg = document.getElementById('avatarCorpoCheio');
    if (bgImg) bgImg.style.backgroundImage = `url(${maid.fullBody})`;

    // 3. Recursos (Grid Horizontal)
    const gridRecursos = document.getElementById('gridRecursos');
    if (gridRecursos) {
        gridRecursos.innerHTML = maid.recursos.map(item => `
            <div class="card-recurso">
                <div class="midia-recurso"><img src="${item.img}" alt="${item.name}"></div>
                <div class="info-recurso">
                    <span class="recurso-nome">${item.name}</span>
                    <p class="versalhes-paragrafo recurso-desc">${item.desc}</p>
                </div>
            </div>
        `).join('');
    }

    // 4. Doutrinas (Tabela com Título Personalizado no HTML)
    const corpoDoutrinas = document.getElementById('corpoDoutrinas');
    if (corpoDoutrinas) {
        corpoDoutrinas.innerHTML = `
            <table class="tabela-doutrinas">
                <tbody>
                    ${maid.doutrinas.map(d => `
                    <tr>
                        <td class="doutrina-nome-col">${d.name}</td>
                        <td class="doutrina-desc-col"><p class="versalhes-paragrafo">${d.desc}</p></td>
                    </tr>`).join('')}
                </tbody>
            </table>`;
    }

    // 5. Métricas (Agora com Layout Lado a Lado: Barra | Diagnóstico)
    const containerMetricas = document.getElementById('metricasEficacia');
    if (containerMetricas) {
        containerMetricas.innerHTML = attributeLabels.map((label, i) => {
            const valor = maid.metricas[i] || 0;
            const classeTexto = valor > 100 ? 'sobrecarga-texto' : '';
            return `
                <div class="metrica-item">
                    <div class="metrica-corpo">
                        <div class="metrica-grupo">
                            <span class="metrica-label">${label}</span>
                            <span class="metrica-valor ${classeTexto}">${valor}%</span>
                        </div>
                        <div class="barra-metrica-bg">
                            <div class="barra-preenchimento"></div>
                        </div>
                    </div>
                    <div class="diagnostico-texto">
                         <p class="versalhes-paragrafo">${maid.diagnosticos[i] || "Análise pendente."}</p>
                    </div>
                </div>`;
        }).join('');

        // Animação das barras
        setTimeout(() => {
            const barras = containerMetricas.querySelectorAll('.barra-preenchimento');
            barras.forEach((barra, i) => {
                const valorAlvo = maid.metricas[i] || 0;
                barra.style.width = `${Math.min(valorAlvo, 100)}%`;
                if (valorAlvo >= 100) barra.classList.add('no-auge');
                if (valorAlvo > 100) barra.classList.add('sobrecarga');
            });
        }, 50);
    }

    document.querySelectorAll('.maid-thumb').forEach((t, i) => t.classList.toggle('ativa', i === index));
}

function moverCarrossel(direcao) {
    const carrossel = document.getElementById('carrosselMaids');
    if(!carrossel) return;
    const larguraPagina = carrossel.clientWidth;
    carrossel.scrollBy({ left: direcao * larguraPagina, behavior: 'smooth' });
    setTimeout(checarSetas, 600);
}

function checarSetas() {
    const carrossel = document.getElementById('carrosselMaids');
    const btnAnterior = document.querySelector('.botao-navegacao.anterior');
    const btnProximo = document.querySelector('.botao-navegacao.proximo');
    if (!carrossel || !btnAnterior || !btnProximo) return;
    btnAnterior.style.opacity = carrossel.scrollLeft <= 10 ? '0' : '1';
    btnAnterior.style.pointerEvents = carrossel.scrollLeft <= 10 ? 'none' : 'auto';
    const fimAlcancado = carrossel.scrollLeft + carrossel.clientWidth >= carrossel.scrollWidth - 10;
    btnProximo.style.opacity = fimAlcancado ? '0' : '1';
    btnProximo.style.pointerEvents = fimAlcancado ? 'none' : 'auto';
}

window.onload = inicializarCatalogo;