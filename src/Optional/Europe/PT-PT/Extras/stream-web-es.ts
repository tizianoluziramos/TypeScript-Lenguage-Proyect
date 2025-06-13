// stream-web-pt.ts
import {
    Readable,
    Writable,
    Transform,
    Duplex,
    PassThrough,
    ReadableOptions,
    WritableOptions,
    TransformOptions,
    DuplexOptions
} from 'stream';

// Classe de leitura
class Leitura extends Readable {
    constructor(opcoes?: ReadableOptions) {
        super(opcoes);
    }

    _read(tamanho: number): void {
        // Implementação personalizada do método _read
        this.push('Exemplo de dado'); // Exemplo de dado a ser emitido
        this.push(null); // Finaliza o fluxo
    }

    static deArray(arr: any[]): Leitura {
        const fluxo = new Leitura();
        arr.forEach(dado => fluxo.push(dado));
        fluxo.push(null); // Finalizar o fluxo
        return fluxo;
    }
}

// Classe de escrita
class Escrita extends Writable {
    private arr: any[] = []; // Armazenar os dados

    constructor(opcoes?: WritableOptions) {
        super(opcoes);
    }

    _write(dado: any, codificacao: string, callback: (erro?: Error | null) => void): void {
        // Adicionar o dado ao array
        this.arr.push(dado);
        callback(); // Chamar o callback para indicar que foi processado
    }

    _final(callback: (erro?: Error | null) => void): void {
        // Finalizar e devolver os dados acumulados
        console.log('Dados escritos:', this.arr);
        callback(); // Finaliza o fluxo
    }

    getDados(): any[] {
        return this.arr; // Método para acessar os dados armazenados
    }
}

// Classe de transformação
class Transformacao extends Transform {
    constructor(opcoes?: TransformOptions) {
        super(opcoes);
    }

    _transform(dado: any, codificacao: string, callback: (erro?: Error | null, resultado?: any) => void): void {
        // Transformar o dado recebido (por exemplo, converter para maiúsculas)
        const resultado = dado.toString().toUpperCase();
        callback(null, resultado); // Devolver o resultado transformado
    }
}

// Classe duplex (leitura e escrita)
class Duplicado extends Duplex {
    constructor(opcoes?: DuplexOptions) {
        super(opcoes);
    }

    _read(tamanho: number): void {
        // Emitir dados no fluxo
        this.push('Dado do fluxo duplicado');
        this.push(null); // Indica que não há mais dados
    }

    _write(dado: any, codificacao: string, callback: (erro?: Error | null) => void): void {
        // Processar o dado recebido
        console.log('Escrevendo em Duplicado:', dado);
        callback(); // Chamar o callback para indicar que foi processado
    }
}

// Classe PassThrough
class Passar extends PassThrough {
    constructor(opcoes?: DuplexOptions) {
        super(opcoes);
    }
}

// Exportar as classes
const streamEmPortugues = {
    Leitura,
    Escrita,
    Transformacao,
    Duplicado,
    Passar
};

export default streamEmPortugues;
