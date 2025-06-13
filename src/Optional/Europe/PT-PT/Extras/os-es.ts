// os-pt.ts
import {
    EOL,
    arch as arquitetura,
    cpus as processadores,
    endianness as ordemDeBytes,
    freemem as memoriaLivre,
    homedir as diretorioInicial,
    hostname as nomeDoHost,
    loadavg as cargaMedia,
    networkInterfaces as interfacesDeRede,
    platform as plataforma,
    release as versaoDoSO,
    tmpdir as diretorioTemporario,
    totalmem as memoriaTotal,
    uptime as tempoAtivo,
    userInfo as infoUsuario,
} from 'os';

// Exportar constantes e funções
const sistemaOperacional = {
    EOL, // Linha de término
    arquitetura, // Retorna a arquitetura do processador
    processadores, // Informações sobre os CPUs
    ordemDeBytes, // Retorna a ordem dos bytes
    memoriaLivre, // Retorna a memória livre em bytes
    diretorioInicial, // Retorna o diretório inicial do usuário atual
    nomeDoHost, // Retorna o nome do host
    cargaMedia, // Retorna a carga média do sistema
    interfacesDeRede, // Informações das interfaces de rede
    plataforma, // Retorna a plataforma do sistema operacional
    versaoDoSO, // Retorna a versão do sistema operacional
    diretorioTemporario, // Retorna o diretório temporário
    memoriaTotal, // Retorna a memória total em bytes
    tempoAtivo, // Retorna o tempo de atividade do sistema
    infoUsuario, // Informações do usuário atual
};

// Exportar o módulo em português
export default sistemaOperacional;

// Funções auxiliares com nomes traduzidos
export function obterInformacoesSistema() {
    return {
        arquitetura: sistemaOperacional.arquitetura(),
        nomeDoHost: sistemaOperacional.nomeDoHost(),
        diretorioInicial: sistemaOperacional.diretorioInicial(),
        memoriaLivre: sistemaOperacional.memoriaLivre(),
        memoriaTotal: sistemaOperacional.memoriaTotal(),
        tempoAtivo: sistemaOperacional.tempoAtivo(),
        cargaMedia: sistemaOperacional.cargaMedia(),
        interfacesDeRede: sistemaOperacional.interfacesDeRede(),
        versaoDoSO: sistemaOperacional.versaoDoSO(),
    };
}
