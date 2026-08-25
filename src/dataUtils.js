class DataUtils {
  /** Verifica se um ano é bissexto */
  ehBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
  }

  /** Retorna quantos dias tem um mês em um determinado ano */
  diasNoMes(mes, ano) {
    if (mes < 1 || mes > 12) {
      throw new Error("Mês inválido");
    }
    return new Date(ano, mes, 0).getDate();
  }

  /** Formata uma data no padrão dd/mm/aaaa */
  formatarDataBR(data) {
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  /** Formata uma data no padrão aaaa-mm-dd (ISO) */
  formatarDataISO(data) {
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const dia = String(data.getDate()).padStart(2, "0");
    return `${ano}-${mes}-${dia}`;
  }

  /** Retorna uma nova data somando uma quantidade de dias */
  adicionarDias(data, dias) {
    const resultado = new Date(data);
    resultado.setDate(resultado.getDate() + dias);
    return resultado;
  }

  /** Retorna uma nova data subtraindo uma quantidade de dias */
  subtrairDias(data, dias) {
    return this.adicionarDias(data, -dias);
  }

  /** Calcula a diferença em dias entre duas datas */
  diferencaEmDias(dataInicio, dataFim) {
    const umDia = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs(dataFim - dataInicio) / umDia);
  }

  /** Verifica se uma data cai em um fim de semana */
  ehFimDeSemana(data) {
    const diaDaSemana = data.getDay();
    return diaDaSemana === 0 || diaDaSemana === 6;
  }

  /** Retorna o próximo dia útil (pula sábados e domingos) */
  proximoDiaUtil(data) {
    const resultado = new Date(data);
    resultado.setDate(resultado.getDate() + 1);
    while (this.ehFimDeSemana(resultado)) {
      resultado.setDate(resultado.getDate() + 1);
    }
    return resultado;
  }

  /** Calcula a idade em anos completos a partir da data de nascimento */
  calcularIdade(dataNascimento, dataReferencia = new Date()) {
    if (dataNascimento > dataReferencia) {
      throw new Error("A data de nascimento não pode ser no futuro");
    }
    let idade = dataReferencia.getFullYear() - dataNascimento.getFullYear();
    const mes = dataReferencia.getMonth() - dataNascimento.getMonth();
    if (mes < 0 || (mes === 0 && dataReferencia.getDate() < dataNascimento.getDate())) {
      idade--;
    }
    return idade;
  }

  /** Converte uma data para timestamp (milissegundos) */
  dataParaTimestamp(data) {
    return data.getTime();
  }

  /** Converte um timestamp para um objeto Date */
  timestampParaData(timestamp) {
    return new Date(timestamp);
  }

  /** Compara duas datas: retorna -1, 0 ou 1 */
  compararDatas(data1, data2) {
    const tempo1 = data1.getTime();
    const tempo2 = data2.getTime();
    if (tempo1 < tempo2) return -1;
    if (tempo1 > tempo2) return 1;
    return 0;
  }

  /** Verifica se um valor representa uma data válida */
  ehDataValida(valor) {
    const data = new Date(valor);
    return !isNaN(data.getTime());
  }

  /** Retorna o nome do dia da semana de uma data */
  obterDiaDaSemana(data) {
    const dias = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ];
    return dias[data.getDay()];
  }

  /** Retorna o nome do mês a partir do seu número (1-12) */
  obterNomeDoMes(mes) {
    if (mes < 1 || mes > 12) {
      throw new Error("Mês inválido");
    }
    const nomes = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    return nomes[mes - 1];
  }

  /** Retorna a data do primeiro dia do mês */
  inicioDoMes(data) {
    return new Date(data.getFullYear(), data.getMonth(), 1);
  }

  /** Retorna a data do último dia do mês */
  fimDoMes(data) {
    return new Date(data.getFullYear(), data.getMonth() + 1, 0);
  }

  /** Verifica se uma data está entre duas outras (inclusive) */
  estaEntreDatas(data, inicio, fim) {
    return data.getTime() >= inicio.getTime() && data.getTime() <= fim.getTime();
  }

  /** Retorna o trimestre do ano (1 a 4) de uma data */
  trimestreDoAno(data) {
    return Math.floor(data.getMonth() / 3) + 1;
  }
}

module.exports = DataUtils;
