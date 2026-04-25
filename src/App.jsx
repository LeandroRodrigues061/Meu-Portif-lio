import { useState } from 'react';
import { Mail, Download, X, ExternalLink, Calendar, Briefcase, GraduationCap, Globe, BookOpen } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const [projetoSelecionado, setProjetoSelecionado] = useState(null); 
  const [imagemExpandida, setImagemExpandida] = useState(null); // NOVO: Estado para a foto em tela cheia

  const projetos = [
    {
      id: 1,
      titulo: "Quero+",
      descricaoCurta: "Um site para uma salgateria local",
      descricaoCompleta: "Um projeto acadêmico desenvolvido para uma salgateria local, com o objetivo de criar uma plataforma de pedidos online que permita aos clientes fazerem seus pedidos de forma rápida e fácil, além de facilitar a gestão dos pedidos para os proprietários do negócio.",
      participacao: "Atuei no desenvolvimento do Front-End da aplicação. No Frontend mobile, criei interfaces responsivas garantindo uma boa experiência do usuário.",
      tecnologias: ["HTML", "CSS", "JavaScript"],
      linkRepo: "https://github.com/LeandroRodrigues061/Desenvolvimento-Pi",
      imagemCapa: "./queromais/inicio.png",
      screenshots: ["./queromais/inicio.png", "./queromais/cardapio.png", "./queromais/localizacao.png", "./queromais/footer.png"] 
    },
    {
      id: 2,
      titulo: "Krusty-Burguer",
      descricaoCurta: "Uma aplicação Web para uma Hamburgueria fictícia",
      descricaoCompleta: "Projeto interdisciplinar do segundo semestre do curso de Desenvolvimento de Software Multiplataforma da Fatec Zona Leste. O site é um sistema de pedidos para uma hamburgueria fictícia. O nome da hamburgueria é Krusty Burger, e a ideia do projeto é que o usuário consiga visualizar os produtos, realizar pedidos e verificar o status do pedido.",
      participacao: "Nesse projeto atuei no desenvolvimento FullStack, utilizando NodeJS e Express para o backend, Handlebars para as views, e MySQL para o banco de dados. Fui responsável por criar a estrutura do banco de dados, desenvolver as rotas de API para gerenciamento de produtos e pedidos, e implementar a lógica de negócios para processar os pedidos dos clientes.",
      tecnologias: ["Node.js", "Express.js", "Handlebars", "mySQL", "HTML", "CSS"],
      linkRepo: "https://github.com/R4ULz/ProjetoInterdisciplinar-2sem-atualizado.git",
      imagemCapa: "./krusty-burguer/index.png",
      screenshots: ["./krusty-burguer/index.png", "./krusty-burguer/menu.png", "./krusty-burguer/ofertas.png", "./krusty-burguer/perfil.png", "./krusty-burguer/sobre.png", "./krusty-burguer/footer.png"]
    },
    {
      id: 3,
      titulo: "Go.Planner",
      descricaoCurta:"Uma aplicação Web de planejamento de viagens",
      descricaoCompleta:"Uma aplicação Web de um sistema gerenciador de viagens, onde os usuarios podem criar, gerenciar e compartilhar com amigos, seus planejamentos de viagem",
      participacao: "Projeto no qual eu pude participar do desenvolvimento do Front-End utilizando React, criando componentes reutilizáveis e garantindo uma experiência de usuário fluida e responsiva.",
      tecnologias: ["React", "Node.js", "TypeScript", "MongoDB"],
      linkRepo: "https://github.com/LeandroRodrigues061/go-planner.git",
      imagemCapa: "./go-planner-web/Index.png",
      screenshots: ["./go-planner-web/Index.png", "./go-planner-web/cadastro.png", "./go-planner-web/login.png", "./go-planner-web/perfil.png", "./go-planner-web/lugares.png", "./go-planner-web/planejamento.png", "./go-planner-web/planejamento2.png", "./go-planner-web/sobre.png","./go-planner-web/viagem.png", "./go-planner-web/footer.png"]
    },
    {
      id: 4,
      titulo: "Go.Planner Mobile",
      descricaoCurta:"Aplicativo móvel de planejamento de viagens",
      descricaoCompleta:"O Go.Planner (Mobile) é a continuação de um projeto interdisciplinar (Go.Planner Web) que se consite na versão de aplicação móvel desenvolvida para simplificar a organização de viagens. Com ele, você pode criar atividades, convidar amigos, gerenciar viagens e manter todos os detalhes da sua aventura em um só lugar.",
      participacao: "Projeto no qual eu pude participar do desenvolvimento do Front-End utilizando React Native, criando componentes reutilizáveis e garantindo uma experiência de usuário fluida e responsiva.",
      tecnologias: ["React Native", "Node.js", "TypeScript", "MongoDB", "Expo"],
      linkRepo: "https://github.com/Bonde-do-tigrinho/Go-Planner-Mobile.git",
      imagemCapa: "./go-planner-mobile/Inicio.png",
      screenshots: ["./go-planner-mobile/Inicio.png", "./go-planner-mobile/telainicio.png", "./go-planner-mobile/cadastro.png", "./go-planner-mobile/telaconfirmacao.png", "./go-planner-mobile/home.png", "./go-planner-mobile/telanotificacao.png", "./go-planner-mobile/telaamigos.png", "./go-planner-mobile/historicovigem.png"]
    },
    {
      id: 5,
      titulo: "Leilão-Fácil",
      descricaoCurta: "Um sistema de busca de ímoveis em leilão e venda direta.",
      descricaoCompleta: "É uma interface de usuário para uma plataforma inovadora de busca de imóveis em leilão ou venda direta. A interface consome dados de uma API externa, que realiza web scraping em sites de grandes instituições financeiras (Caixa, Santander, etc.), exibindo oportunidades de forma clara, organizada e intuitiva.",
      participacao: "Projeto no qual pude participar do desenvolvimento do back-end, utilizando principalmente Pyhon para executar WebScrapings nos sites de grandes instituições financeiras.",
      tecnologias: ["React", "Node.js", "TypeScript", "MongoDB", "Python", "BeautifulSoup", "Selenium", "WebScraping", "Docker"],
      linkRepo: "https://github.com/Bonde-do-tigrinho/leilaoFacil-frontEnd.git",
      imagemCapa: "./leilao-facil/login.png",
      screenshots: ["./leilao-facil/buscador.png", "./leilao-facil/leiloes.png", "./leilao-facil/login.png", "./leilao-facil/telaperfil.png"]
    },
    {
      id: 6,
      titulo: "Projeto ChatBot Furia",
      descricaoCurta: "Um Quiz de perguntas e respostas sobre o time de e-sports Furia",
      descricaoCompleta: "Um Quiz dinâmico, com tipos de níveis de perguntas, ranking de pontuação e com uma navegabilidade muito intuitiva e clara!",
      participacao: "Projeto pessoal no qual eu pude realizar o desenvolvimento tanto back-end quanto front-end, utilizando react/nextJs e Firebase para o banco de dados e autenticação!",
      tecnologias: ["React", "Next.js", "Firebase", "Firestore", "TypeScript", "Tailwind CSS"],
      linkRepo: "https://github.com/LeandroRodrigues061/FuriaChatBot.git",
      imagemCapa: "./chatbot-furia/home.png",
      screenshots: ["./chatbot-furia/home.png", "./chatbot-furia/dificuldade.png", "./chatbot-furia/perguntas.png", "./chatbot-furia/ranking.png"]
    },
    {
      id: 7,
      titulo: "Downloader de vídeos do youtube",
      descricaoCurta: "Um aplicativo desktop para baixar videos do youtube",
      descricaoCompleta: "Um aplicativo desktop para baixar vídeos do youtube, utilizando a biblioteca pytube para realizar o download dos vídeos. O aplicativo possui uma interface gráfica simples e intuitiva, onde o usuário pode inserir a URL do vídeo que deseja baixar e escolher o formato de saída.",
      participacao: "Projeto pessoal no qual eu pude realizar o desenvolvimento tanto back-end quanto front-end, utilizando Python e a biblioteca Tkinter para uma interface gráfica simples porém bem funcional.",
      tecnologias: ["Python", "Tkinter", "Pytube"],
      linkRepo: "https://github.com/LeandroRodrigues061/Downloader",
      imagemCapa: "./downloader/telaInicio.png",
      screenshots: ["./downloader/telaInicio.png", "./downloader/InicioLink.png", "./downloader/arquivobaixado.png", "./downloader/video.png"]
    }
  ];

  const projetosVisiveis = mostrarTodos ? projetos : projetos.slice(0, 3);

  const rolarPara = (id) => {
    const secao = document.getElementById(id);
    if (secao) {
      secao.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans relative">
      
      <nav className="flex justify-between items-center py-6 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-blue-500 tracking-tighter cursor-pointer">Léo.dev</div>
        <div className="space-x-8 text-sm font-medium hidden md:flex">
          <button onClick={() => rolarPara('sobre')} className="hover:text-blue-400 transition-colors cursor-pointer">Sobre</button>
          <button onClick={() => rolarPara('trajetoria')} className="hover:text-blue-400 transition-colors cursor-pointer">Trajetória</button>
          <button onClick={() => rolarPara('projetos')} className="hover:text-blue-400 transition-colors cursor-pointer">Projetos</button>
          <button onClick={() => rolarPara('contato')} className="hover:text-blue-400 transition-colors cursor-pointer">Contato</button>
        </div>
      </nav>

      <main id="sobre" className="flex flex-col md:flex-row items-center justify-center mt-12 md:mt-24 px-6 mb-20 max-w-6xl mx-auto gap-12">
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-blue-500 p-1 flex-shrink-0">
          <img 
            src="/minha-foto.jpeg" 
            alt="Leandro Rodrigues" 
            className="w-full h-full object-cover rounded-full bg-gray-800"
            onError={(e) => { e.target.src = "https://via.placeholder.com/250x250/1f2937/3b82f6?text=Sua+Foto" }}
          />
        </div>

        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <span className="px-4 py-2 bg-blue-900/30 text-blue-400 rounded-full text-sm font-semibold mb-4 border border-blue-800/50">
            Disponível para novas oportunidades
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Olá, eu sou o <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Leandro Rodrigues</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
            Desenvolvedor focado em criar soluções robustas e escaláveis utilizando <span className="text-gray-200 font-medium">React Native, Java e Spring Boot</span>, com experiência prática em suporte técnico e infraestrutura.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => rolarPara('projetos')} className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all cursor-pointer">
              Ver meus Projetos
            </button>
            <a href="/curriculo.pdf" download="Curriculo-Leandro-Rodrigues.pdf" className="flex items-center justify-center gap-2 px-8 py-3 bg-gray-900 hover:bg-gray-800 text-gray-200 font-semibold rounded-lg transition-all border border-gray-800 cursor-pointer">
              <Download size={20} /> Baixar Currículo
            </a>
          </div>
        </div>
      </main>

      <section id="trajetoria" className="py-16 px-6 max-w-6xl mx-auto bg-gray-900/30 rounded-3xl border border-gray-800/50 mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Minha <span className="text-blue-500">Trajetória</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2"><GraduationCap size={24}/> Educação</h3>
              <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
                <h4 className="font-bold text-gray-100">Desenvolvimento de Software Multiplataformas</h4>
                <p className="text-sm text-gray-400 mb-2">FATEC-ZL • Último Semestre</p>
                <p className="text-sm text-gray-500 flex items-center gap-1"><Calendar size={14}/> Conclusão prevista: 06/2026</p>
              </div>
            </div>

            <div className="space-y-5">
              <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2"><Briefcase size={24}/> Experiência Profissional</h3>
              <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
                <h4 className="font-bold text-gray-100">Analista de Suporte Técnico</h4>
                <p className="text-sm text-gray-400 mb-3">RAR Soluções Corporativas • 11/2023 - Presente</p>
                <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
                  <li>Manutenção preventiva e corretiva de sistemas e aplicações.</li>
                  <li>Suporte técnico focado em hardware e configuração de impressoras corporativas.</li>
                  <li>Atendimento ao cliente para resolução de chamados técnicos (SLA).</li>
                </ul>
              </div>

              <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
                <h4 className="font-bold text-gray-100">Auxiliar de PCP</h4>
                <p className="text-sm text-gray-400 mb-3">Malharia Berlan • 04/2022 - 07/2023</p>
                <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
                  <li>Programação e controle de produção;</li>
                  <li>Conferência de notas fiscais e indenizações;</li>
                  <li>Gerenciamento de e-mails corporativos;</li>
                  <li>Faturamento de coletas e elaboração de relatórios analíticos e sintéticos de produção;</li>
                  <li>Emissão e envio de Ordens de Serviço e programação de tingimentos;</li>
                  <li>Acompanhamento de produções e prazos.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2"><BookOpen size={24}/> Cursos </h3>
              <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 mb-4">
                <h4 className="font-bold text-gray-100">Curso Técnico em Desenvolvimento de Sistemas (DS)</h4>
                <p className="text-sm text-gray-400 mb-1">ETEC Extensão Esther Frankel Sampaio • São Paulo - SP</p>
                <p className="text-sm text-gray-500">Concluído em 12/2023</p>
              </div>
              <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 mb-10 mt-10">
                <h4 className="font-bold text-gray-100">Montagem e Edição de videos e imagem</h4>
                <p className="text-sm text-gray-400 mb-1">Centro de desenvolvimento Social e Produtivo CEDESP Santa Luzia • São Paulo - SP</p>
                <p className="text-sm text-gray-500">Concluído em 12/2021</p>
              </div>
                <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 mb-10">
                <h4 className="font-bold text-gray-100">Montagem e Manutenção de Computadores e Redes</h4>
                <p className="text-sm text-gray-400 mb-1">Centro de desenvolvimento Social e Produtivo CEDESP Santa Luzia • São Paulo - SP</p>
                <p className="text-sm text-gray-500">Concluído em 12/2020</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2"><Globe size={24}/> Idiomas</h3>
              <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-200">Português</span>
                  <span className="text-sm bg-gray-800 px-3 py-1 rounded text-gray-400">Nativo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-200">Inglês</span>
                  <span className="text-sm bg-gray-800 px-3 py-1 rounded text-gray-400">Intermediário / Técnico</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="projetos" className="py-10 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Portfólio de <span className="text-purple-500">Projetos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {projetosVisiveis.map((projeto) => (
            <div key={projeto.id} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 flex flex-col group hover:border-purple-500/50 transition-all">
              <div className="h-48 w-full border-b border-gray-800 overflow-hidden bg-gray-800">
                <img 
                  src={projeto.imagemCapa} 
                  alt={projeto.titulo} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.src = `https://via.placeholder.com/600x400/1f2937/9ca3af?text=${projeto.titulo.replace(/ /g, '+')}` }}
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-100 mb-2">{projeto.titulo}</h3>
                <p className="text-gray-400 mb-6 flex-grow">{projeto.descricaoCurta}</p>
                
                <button 
                  onClick={() => setProjetoSelecionado(projeto)}
                  className="w-full py-3 bg-gray-800 hover:bg-purple-600 text-white font-medium rounded-lg transition-colors cursor-pointer"
                >
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {projetos.length > 3 && (
          <div className="flex justify-center">
            <button 
              onClick={() => setMostrarTodos(!mostrarTodos)}
              className="px-6 py-2 bg-transparent border border-purple-500 text-purple-400 hover:bg-purple-900/20 font-semibold rounded-lg transition-all cursor-pointer"
            >
              {mostrarTodos ? "Ver menos projetos" : "Ver todos os projetos"}
            </button>
          </div>
        )}
      </section>

      {/* Modal Principal do Projeto */}
      {projetoSelecionado && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-40 backdrop-blur-sm">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl">
            
            <div className="sticky top-0 bg-gray-900/95 p-6 border-b border-gray-800 flex justify-between items-center z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white">{projetoSelecionado.titulo}</h2>
              <button 
                onClick={() => setProjetoSelecionado(null)}
                className="p-2 bg-gray-800 hover:bg-red-500/20 hover:text-red-400 rounded-full transition-colors cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <h3 className="text-lg font-bold text-blue-400 mb-2">Visão Geral</h3>
                <p className="text-gray-300 leading-relaxed">{projetoSelecionado.descricaoCompleta}</p>
              </div>

              <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700">
                <h3 className="text-lg font-bold text-purple-400 mb-2">Minha Participação & Tecnologias</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{projetoSelecionado.participacao}</p>
                
                <div className="flex flex-wrap gap-2">
                  {projetoSelecionado.tecnologias.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-900/40 text-purple-300 border border-purple-800/50 rounded-md text-sm font-medium cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {projetoSelecionado.screenshots.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-gray-200 mb-4">Screenshots do Funcionamento <span className="text-sm font-normal text-gray-500">(Clique para ampliar)</span></h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {projetoSelecionado.screenshots.map((img, i) => (
                      <div 
                        key={i} 
                        className="rounded-xl overflow-hidden border border-gray-800 bg-gray-950 flex items-center justify-center p-2 h-64 md:h-80 shadow-inner cursor-pointer group"
                        onClick={() => setImagemExpandida(img)} // NOVO: Ao clicar, salva a imagem no estado
                      >
                        <img 
                          src={img} 
                          alt={`Screenshot ${i+1}`} 
                          className="max-w-full max-h-full object-contain rounded transition-transform group-hover:scale-105 duration-300"
                          onError={(e) => { e.target.src = "https://via.placeholder.com/400x800/374151/9ca3af?text=Indisponível" }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-800">
                {projetoSelecionado.linkRepo && (
                  <a href={projetoSelecionado.linkRepo} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors cursor-pointer border border-gray-600">
                    <FaGithub size={20} /> Acessar Código (GitHub)
                  </a>
                )}
                {projetoSelecionado.linkDemo && (
                  <a href={projetoSelecionado.linkDemo} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors cursor-pointer">
                    <ExternalLink size={20} /> Projeto em Produção
                  </a>
                )}
              </div>

            </div>
          </div>
        </div>
      )}

      {/* NOVO: Lightbox (Modal de Imagem Expandida) */}
      {imagemExpandida && (
        <div 
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4 sm:p-8"
          onClick={() => setImagemExpandida(null)} // Fecha ao clicar fora da imagem
        >
          <button 
            onClick={() => setImagemExpandida(null)}
            className="absolute top-4 right-4 md:top-8 md:right-8 p-3 bg-gray-800/80 hover:bg-red-500 text-white rounded-full transition-colors cursor-pointer z-50"
          >
            <X size={28} />
          </button>
          
          <img 
            src={imagemExpandida} 
            alt="Screenshot em tamanho real" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Impede que clicar NA imagem feche o modal
          />
        </div>
      )}

      <footer id="contato" className="py-12 text-center border-t border-gray-800 bg-gray-900/50">
        <h2 className="text-2xl font-bold mb-6">Vamos conversar?</h2>
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://github.com/LeandroRodrigues061" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
            <FaGithub size={24} /> GitHub
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors cursor-pointer">
            <FaLinkedin size={24} /> LinkedIn
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-purple-500 transition-colors cursor-pointer">
            <Mail size={24} /> E-mail
          </a>
        </div>
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Leandro Rodrigues. Construído com Vite, React e Tailwind CSS.
        </p>
      </footer>

    </div>
  )
}

export default App