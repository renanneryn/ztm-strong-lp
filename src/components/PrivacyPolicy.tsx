import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import logo from "../assets/logo.webp";

const EMAIL = "ztmstrong@gmail.com";
const TELEFONE = "(21) 98088-1200";

export const PRIVACY_PATH = "/politica-de-privacidade";

function Secao({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4">{titulo}</h2>
      <div className="space-y-3 text-slate-300 leading-relaxed">{children}</div>
    </section>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-brand-concrete">
      <header className="border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
          <a href="/" aria-label="ZTM STRONG, voltar ao início">
            <img src={logo} alt="ZTM STRONG" className="h-12 w-auto" />
          </a>
          <a href="/" className="flex items-center gap-2 text-sm text-slate-400 hover:text-brand-gold transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao site
          </a>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-black italic tracking-tighter uppercase mb-3">
          Política de Privacidade
        </h1>
        <p className="text-slate-500 text-sm mb-12">Última atualização: 31 de outubro de 2026.</p>

        <Secao titulo="1. Quem somos (controlador)">
          <p>
            Este site é mantido por <strong>ZTM STRONG CONSTRUÇÕES E EMPREENDIMENTOS LTDA.</strong>, que atua como
            controladora dos dados pessoais tratados conforme descrito aqui, nos termos da Lei Geral de Proteção de
            Dados (Lei nº 13.709/2018, LGPD).
          </p>
          <p>
            Contato para assuntos de privacidade:{" "}
            <a className="text-brand-gold underline" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>{" "}
            ou {TELEFONE}.
          </p>
        </Secao>

        <Secao titulo="2. O que o site coleta">
          <p>
            O site é uma página de apresentação. <strong>Ele não possui formulário de cadastro, área de login,
            comentários, pixel de anúncios nem ferramenta de análise de acesso (como Google Analytics)</strong>, e não
            define cookies próprios. Não coletamos nem armazenamos dados pessoais diretamente por meio do site.
          </p>
          <p>
            Os botões de orçamento abrem uma conversa no WhatsApp (link wa.me) com uma mensagem pré-preenchida. A partir
            desse ponto, os dados que você informar na conversa (nome, telefone, endereço da obra, detalhes do serviço)
            ficam no WhatsApp e passam a ser tratados por nós para atendê-lo. O site em si não registra quem clicou.
          </p>
          <p>
            Como em qualquer site, ao carregar as páginas seu navegador envia dados técnicos (endereço IP, tipo de
            navegador, data e hora) aos servidores que entregam o conteúdo, listados na seção 5.
          </p>
        </Secao>

        <Secao titulo="3. Para que usamos e em que base legal">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Responder pedidos de orçamento e atender você pelo WhatsApp:</strong> procedimentos preliminares
              relacionados a contrato a pedido do titular (LGPD, art. 7º, V).
            </li>
            <li>
              <strong>Funcionamento e segurança do site (dados técnicos de acesso):</strong> tratados pelos provedores
              de hospedagem com base no legítimo interesse (art. 7º, IX).
            </li>
          </ul>
          <p>Não vendemos dados pessoais nem os usamos para decisões automatizadas.</p>
        </Secao>

        <Secao titulo="4. Cookies">
          <p>
            O site não define cookies próprios. Serviços de terceiros usados para carregar fontes e imagens (seção 5)
            podem receber dados técnicos do seu navegador, conforme as políticas de cada um.
          </p>
        </Secao>

        <Secao titulo="5. Com quem os dados podem ser compartilhados">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>WhatsApp (Meta Platforms):</strong> ao iniciar a conversa, você usa o serviço sob os termos e a
              política de privacidade do WhatsApp.
            </li>
            <li>
              <strong>Vercel Inc.:</strong> hospedagem do site; recebe dados técnicos de acesso. Pode envolver
              transferência internacional de dados.
            </li>
            <li>
              <strong>Google Fonts (Google LLC):</strong> fornece as fontes de texto; recebe o endereço IP do
              navegador ao carregá-las.
            </li>
            <li>
              <strong>Unsplash e transparenttextures.com:</strong> servem algumas imagens decorativas e podem receber
              o endereço IP do navegador.
            </li>
          </ul>
          <p>Também podemos compartilhar dados quando a lei ou uma autoridade competente exigir.</p>
        </Secao>

        <Secao titulo="6. Por quanto tempo guardamos">
          <p>
            As conversas de atendimento são mantidas pelo tempo necessário para o orçamento, a execução do serviço e o
            cumprimento de obrigações legais, e depois eliminadas ou anonimizadas quando não houver mais finalidade.
          </p>
        </Secao>

        <Secao titulo="7. Seus direitos (LGPD, art. 18)">
          <p>Você pode solicitar, a qualquer momento e mediante requisição ao nosso contato:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>confirmação de que tratamos seus dados e acesso a eles;</li>
            <li>correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;</li>
            <li>portabilidade, quando aplicável;</li>
            <li>informação sobre com quem compartilhamos seus dados;</li>
            <li>revogação do consentimento, quando essa for a base legal;</li>
            <li>revisão de decisões e oposição a tratamentos, nos termos da lei.</li>
          </ul>
          <p>Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).</p>
        </Secao>

        <Secao titulo="8. Alterações desta política">
          <p>
            Podemos atualizar este texto, por exemplo se o site passar a usar formulários ou ferramentas de análise. A
            data da última atualização fica no topo da página.
          </p>
        </Secao>
      </main>
    </div>
  );
}
