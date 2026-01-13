/* ─────────────────────────────────────────────────────────────
    PROJETO VERSALHES - DATABASE E RENDERIZADOR COMPLETO
───────────────────────────────────────────────────────────── */

const VersalhesDB = {
    servicos: {
        limpeza: { 
            ref: "ID-001//CLN", 
            capa: "./assets/images/exemplo/limpeza.jpg",
            tag: "Limpeza", 
            icone: "fa-broom", 
            titulo: "Purificação de Superfícies", 
            intro: "Varremos seus problemas para debaixo do tapete. Literalmente.",
            execucao: "Pisos tão brilhantes que você poderá ver o reflexo do seu fracasso organizacional. A poeira é removida com rigor militar; sentimentos de culpa por não limpar a própria casa não estão incluídos no orçamento.",
            toqueVersalhes: "Utilizamos desde rituais de purificação esotérica até esterilização química de nível laboratorial. Se a sujeira persistir, questionaremos a legítidade da existência do seu piso.",
            foco: "Eliminação de impurezas físicas e espirituais.",
            equipe: {
                mestre: "Reina: Definição da geometria de pureza e execução de limpeza técnica.",
                especialistas: [
                    "Rika: Execução tática e limpeza pesada em larga escala.",
                    "Faye: Organização visual e entretenimento cênico através do layout de objetos.",
                    "Eldra: Purificação de manchas em nível metafísico (onde o produto químico não alcança)."
                ]
            }
        },
organizacao: { 
            ref: "#ID-002//ORG", 
            capa: "./assets/images/exemplo/organização.jpg",
            tag: "Organização", 
            icone: "fa-box-archive", 
            titulo: "Imposição de Ordem", 
            intro: "Colocando você no seu devido lugar (provavelmente em uma caixa etiquetada).",
            execucao: "Suas gavetas serão julgadas, condenadas e, finalmente, organizadas. Alinhamento milimétrico de prateleiras.",
            toqueVersalhes: "Geometria Moral: Se não houver utilidade lógica, o objeto é sacrificado ou realocado.",
            foco: "Geometria, logística e gestão de inventário.",
            equipe: { 
                mestre: "Evelyn: Mapeamento logístico e cronometragem de fluxos internos.", 
                especialistas: [
                    "Pixel: Catalogação recorde e correção de glitches de desordem.", 
                    "Morgan: Varredura tática de superfícies e eliminação de ameaças.",
                    "Cipher: Gestão técnica de fluxos de informação e segredos."
                ] 
            }
        },
culinaria: { 
            ref: "#ID-003//GSP", 
            capa: "./assets/images/exemplo/gastronomia.jpg",
            tag: "Culinária", 
            icone: "fa-utensils", 
            titulo: "Gastronomia e Protocolo", 
            intro: "Nutrição necessária para sustentar sua existência medíocre.",
            execucao: "Refeições e cerimônias de chá executadas com a precisão de um ritual sagrado e zero empatia.",
            toqueVersalhes: "Dietas e etiquetas seguidas à risca. Se quebrar o protocolo, seu pedido será ignorado com elegância.",
            foco: "Alta gastronomia, etiqueta e manipulação social.",
            equipe: { 
                mestre: "Carmilla: Chef executiva, mestra de banquetes e inquisição de ingredientes.", 
                especialistas: [
                    "Lumi: Mestra de Cerimônias e etiqueta passiva-agressiva.", 
                    "Saffron: Curadoria de ervas, chás herbais e vibrações nutricionais.",
                    "Camille: Gestão de desejos e manipulação das necessidades do cliente."
                ] 
            }
        },
lavanderia: { 
            ref: "#ID-004//TXM", 
            capa: "./assets/images/exemplo/lavanderia.jpg",
            tag: "Lavanderia", 
            icone: "fa-shirt", 
            titulo: "Descontaminação de Fibras", 
            intro: "Lavando sua roupa suja (e seus segredos) até que fiquem brancos como o vácuo.",
            execucao: "Remoção de manchas e evidências incriminatórias. Vincos tão afiados que poderiam cortar sua arrogância.",
            toqueVersalhes: "Tratamos tecidos com tanta delicadeza que eles sentirão saudades de nós no seu armário bagunçado.",
            foco: "Integridade têxtil e estética visual.",
            equipe: { 
                mestre: "Marín: Purista mor de fibras e detecção de manchas incriminatórias.", 
                especialistas: [
                    "Mnemósine: Perfumaria fina de tecidos e conforto sensorial elevado.", 
                    "Vivia: Otimização de bolsos e alívio de 'pesos financeiros' esquecidos.",
                    "Rei Mikazuki: Exorcismo de ácaros e purificação espiritual de ambientes."
                ] 
            }
        },
reparos: { 
            ref: "#ID-005//RST", 
            capa: "assets/images/exemplo/reparos.jpg",
            tag: "Reparos", 
            icone: "fa-screwdriver-wrench", 
            titulo: "Restauração de Integridade", 
            intro: "Remendando as rachaduras da sua vida, começando pelos móveis.",
            execucao: "Consertamos o que você quebrou tentando ser 'versátil'. Infelizmente, não temos peças de reposição para o seu bom senso.",
            toqueVersalhes: "Cobramos taxas adicionais por danos causados por 'minimalismo acidental'. Se parou de funcionar, não deveria ter existido.",
            foco: "Engenharia, hardware e estabilidade sistêmica.",
            equipe: { 
                mestre: "Margot: Engenharia industrial, solda e reparos estruturais brutos.", 
                especialistas: [
                    "VESPER: Manutenção de hardware pesado e esterilização técnica.", 
                    "A.R.I.A.: Manutenção de sistemas inteligentes, redes e automação residencial.",
                    "Lola: Desmonte de estruturas obsoletas e destruição para forçar o minimalismo técnico."
                ] 
            }
        }
    },

protocolos: [
    {
        serial: "REF: #OP-ORD",
        nivel: "Standard",
        accentClass: "tag-standard",
        titulo: "Purgatório Doméstico",
        subtitulo: "Para quem confunde liberdade com desordem patológica.",
        idsServicos: ["organizacao", "reparos"],
        entregas: "Inventário categorizado, Móveis estabilizados, Eliminação de tralhas sentimentais",
        equipe: ["Pixel", "A.R.I.A."],
        nota: "Sua incapacidade de guardar uma meia não é um 'estilo de vida', é uma falha de caráter.",
        preco: "2.400",
        condicao: "Indicado para acumuladores em negação e mentes caóticas."
    },
    {
        serial: "REF: #OP-BIO",
        nivel: "Premium",
        accentClass: "tag-premium",
        titulo: "Manutenção de Espécime",
        subtitulo: "Mantendo suas funções biológicas operacionais e apresentáveis.",
        idsServicos: ["culinaria", "lavanderia"],
        entregas: "Protocolo nutricional rígido, Higiene têxtil molecular, Etiquetas de conduta",
        equipe: ["Camille", "Mikazuki"],
        nota: "Nós lavamos o tecido, mas a vergonha de quem usa a peça é permanente.",
        preco: "3.150",
        condicao: "Status: Alvo funcional, porém socialmente desleixado."
    },
    {
        serial: "REF: #OP-FULL",
        nivel: "Elite",
        accentClass: "tag-elite",
        titulo: "Protocolo V.E.R.S.A.L.H.E.S.",
        subtitulo: "A substituição total da sua vontade pela nossa eficiência.",
        idsServicos: ["organizacao", "lavanderia", "culinaria", "reparos"],
        entregas: "Gestão residencial total, Blindagem estrutural, Silêncio protocolar",
        equipe: ["Evelyn", "Carmilla", "Bubbles", "Margot"],
        nota: "Você não precisa pensar, nós já decidimos o que é melhor para você (e não é o que você quer).",
        preco: "8.900",
        condicao: "Reservado para elites que desistiram de fingir autonomia."
    },
    {
        serial: "REF: #OP-ESP",
        nivel: "Crítico",
        accentClass: "tag-critical",
        titulo: "Operação Varredura",
        subtitulo: "Limpeza de rastros e evidências de uma vida medíocre.",
        idsServicos: ["limpeza", "lavanderia"],
        entregas: "Descontaminação de superfícies, Ocultação de segredos, Destruição de provas",
        equipe: ["Reina", "Vivia"],
        nota: "O que nós não encontramos nos seus bolsos, nós fingimos que nunca existiu.",
        preco: "1.800",
        condicao: "Crítico: Para clientes com segredos maiores que o bom senso."
    }
]
};

/* ─────────────────────────────────────────────────────────────
    RENDERIZADOR ATUALIZADO (Busca Flexível de Equipe)
───────────────────────────────────────────────────────────── */

const Renderizador = {
    // 1. Gera o HTML de membros da equipe (Maids)
    gerarHTMLMembro(stringDados, isMestre = false) {
        if (!stringDados) return "";
        const partes = stringDados.split(':');
        const nomeParaBusca = partes[0].trim(); // Pega apenas o primeiro nome enviado no DB
        const descricao = partes[1] ? partes[1].trim() : "";

        // Procura no array maidsData (global) se o nome enviado está contido no nome completo do banco
        const maid = (typeof maidsData !== 'undefined') 
            ? maidsData.find(m => m.name.toLowerCase().includes(nomeParaBusca.toLowerCase())) 
            : null;
        
        const fotoUrl = maid ? maid.avatar : "assets/img/maids/default.jpg";

        return `
            <div class="team-member-card ${isMestre ? 'is-mestre' : ''}">
                <div class="member-avatar">
                    <img src="${fotoUrl}" alt="${nomeParaBusca}">
                </div>
                <div class="member-info">
                    <span class="member-name">${nomeParaBusca}</span>
                    <span class="member-role">${descricao}</span>
                </div>
            </div>
        `;
    },

    // 2. Renderiza a seção de Intervenções (Cards expansíveis)
    servicos() {
        const wrapper = document.getElementById('interventions-wrapper');
        if (!wrapper) return;

        wrapper.innerHTML = Object.values(VersalhesDB.servicos).map(s => `
            <article class="service-item">
                <div class="s-closed-state" style="background-image: url('${s.capa}')">
                    <span class="s-ref">${s.ref}</span>
                    <h3 class="s-title-vertical">${s.titulo}</h3>
                    <div class="s-closed-icon">
                        <i class="fa-solid ${s.icone}"></i>
                    </div>
                </div>

                <div class="s-opened-state">
                    <div class="s-main-info">
                        <span class="s-ref-gold">${s.ref}</span>
                        <div class="s-title-container">
                             <i class="fa-solid ${s.icone}"></i>
                             <h2 class="s-title-gold">${s.titulo}</h2>
                        </div>
                        <p class="s-description">${s.intro}</p>

                        <div class="s-details-group">
                            <div class="s-data"><h5>EXECUÇÃO</h5><p>${s.execucao}</p></div>
                            <div class="s-data"><h5>TOQUE VERSALHES</h5><p>${s.toqueVersalhes}</p></div>
                            <div class="s-data"><h5>FOCO OPERACIONAL</h5><p>${s.foco}</p></div>
                        </div>
                    </div>

                    <div class="s-team-info">
                        <div class="s-leader">
                            <h5>RESPONSÁVEL</h5>
                            ${this.gerarHTMLMembro(s.equipe.mestre, true)}
                        </div>
                        <div class="s-staff">
                            <h5>ESPECIALISTAS</h5>
                            <div class="s-staff-list">
                                ${s.equipe.especialistas.map(esp => this.gerarHTMLMembro(esp)).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        `).join('');
    },

    // 3. Renderiza a seção de Protocolos (Pricing/Tabela)
    protocolos() {
        const grid = document.getElementById('pricing-container');
        if (!grid) return;

        grid.innerHTML = VersalhesDB.protocolos.map(p => {
            const htmlTagsServicos = p.idsServicos.map(id => {
                const s = VersalhesDB.servicos[id];
                if(!s) return "";
                return `<span class="tag-servico-item"><i class="fa-solid ${s.icone}"></i> ${s.titulo}</span>`;
            }).join('');

            const htmlListaEntregas = p.entregas.split(',').map(item => `<li>${item.trim()}</li>`).join('');

            // LÓGICA ATUALIZADA: Busca por primeiro nome ou parte do nome
            const htmlMaids = p.equipe.map(nomeCurto => {
                const maidObj = (typeof maidsData !== 'undefined') 
                    ? maidsData.find(m => m.name.toLowerCase().includes(nomeCurto.toLowerCase())) 
                    : null;
                
                const foto = maidObj ? maidObj.avatar : "assets/img/maids/default.jpg";
                const nomeExibicao = maidObj ? maidObj.name.split(' ')[0] : nomeCurto;

                return `
                    <div class="protocol-thumb-maid">
                        <div class="protocol-avatar">
                            <img src="${foto}" alt="${nomeCurto}">
                        </div>
                        <span>${nomeExibicao}</span>
                    </div>
                `;
            }).join('<span class="divider-plus">+</span>');

            return `
            <article class="price-item">
                <header class="card-meta-editorial">
                    <span class="serial-number">${p.serial}</span>
                    <span class="level-tag ${p.accentClass}">${p.nivel}</span>
                </header>
                <div class="card-editorial-content">
                    <div class="service-description">
                        <h4>${p.titulo}</h4>
                        <p class="remark">${p.subtitulo}</p>
                    </div>
                    <div class="protocol-body">
                        <div class="info-group-editorial">
                            <label>MATRIZES</label>
                            <div class="tags-servicos-container">${htmlTagsServicos}</div>
                        </div>
                        <div class="info-group-editorial">
                            <label>ENTREGAS</label>
                            <ul class="list-icon">${htmlListaEntregas}</ul>
                        </div>
                    </div>
                    <div class="protocol-team">
                        <div class="avatars-wrapper">${htmlMaids}</div>
                    </div>
                    <p class="note remark">${p.note || p.nota}</p>
                </div>
                <footer class="footer-editorial">
                    <div class="price-display">
                        <span class="val">
                        <span class="currency-label">CO</span>
                         ${p.preco}</span>
                    </div>
                    <p class="condition">+ ${p.condicao}</p>
                </footer>
            </article>`;
        }).join('');
    }
};

// Inicialização ao carregar o DOM
document.addEventListener('DOMContentLoaded', () => {
    Renderizador.servicos();
    Renderizador.protocolos();
});