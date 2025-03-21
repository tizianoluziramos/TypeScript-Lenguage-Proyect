// moment-pt.ts
import moment from 'moment';

const momentPt = {
    // Obter a data e hora atuais
    agora: () => moment(),

    // Formatar data
    formatar: (data: moment.Moment, formato: string) => data.format(formato),

    // Somar tempo
    somar: (data: moment.Moment, quantidade: number, unidade: moment.unitOfTime.DurationConstructor) => 
        data.add(quantidade, unidade),

    // Subtrair tempo
    subtrair: (data: moment.Moment, quantidade: number, unidade: moment.unitOfTime.DurationConstructor) => 
        data.subtract(quantidade, unidade),

    // Obter o início do dia
    inicioDoDia: (data: moment.Moment) => data.startOf('day'),

    // Obter o final do dia
    fimDoDia: (data: moment.Moment) => data.endOf('day'),

    // Comparar datas
    eAntes: (data1: moment.Moment, data2: moment.Moment) => data1.isBefore(data2),
    eDepois: (data1: moment.Moment, data2: moment.Moment) => data1.isAfter(data2),
    eIgual: (data1: moment.Moment, data2: moment.Moment) => data1.isSame(data2),

    // Obter diferença
    diferenca: (data1: moment.Moment, data2: moment.Moment, unidade: moment.unitOfTime.Diff) => 
        data1.diff(data2, unidade),

    // Obter o dia da semana
    diaDaSemana: (data: moment.Moment) => data.day(),

    // Obter o mês
    mes: (data: moment.Moment) => data.month(),

    // Obter o ano
    ano: (data: moment.Moment) => data.year(),

    // Funções de manipulação de data
    proximoMes: (data: moment.Moment) => data.add(1, 'months'),
    mesAnterior: (data: moment.Moment) => data.subtract(1, 'months'),

    // Obter a duração
    duracao: (duracao: number, unidade: moment.unitOfTime.DurationConstructor) => 
        moment.duration(duracao, unidade),

    // Métodos de formatação de duração
    duracaoFormatada: (duracao: moment.Duration, formato: string) => 
        duracao.humanize(),
};

export default momentPt;
