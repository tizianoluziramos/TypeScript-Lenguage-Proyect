// promessa.ts
export class promessa<T> {
    private executor: (resolver: (valor: T) => void, rejeitar: (motivo?: any) => void) => void;

    constructor(executor: (resolver: (valor: T) => void, rejeitar: (motivo?: any) => void) => void) {
        this.executor = executor;
    }

    then(onCumprido: (valor: T) => void, onRejeitado?: (motivo: any) => void): void {
        const resolver = (valor: T) => {
            onCumprido(valor);
        };

        const rejeitar = (motivo: any) => {
            if (onRejeitado) {
                onRejeitado(motivo);
            }
        };

        this.executor(resolver, rejeitar);
    }
}
