// স্ট্রীম-ওয়েব-বাংলায়.ts
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

// পঠন শ্রেণী
class পঠন extends Readable {
    constructor(opciones?: ReadableOptions) {
        super(opciones);
    }

    _read(tamaño: number): void {
        // _read পদ্ধতির কাস্টম বাস্তবায়ন
        this.push('তথ্য উদাহরণ'); // উদাহরণস্বরূপ তথ্য প্রেরণ
        this.push(null); // প্রবাহ শেষ
    }

    static থেকেArray(arr: any[]): পঠন {
        const flujo = new পঠন();
        arr.forEach(dato => flujo.push(dato));
        flujo.push(null); // প্রবাহ শেষ
        return flujo;
    }
}

// লেখন শ্রেণী
class লেখন extends Writable {
    private arr: any[] = []; // তথ্য সংরক্ষণ

    constructor(opciones?: WritableOptions) {
        super(opciones);
    }

    _write(dato: any, codificacion: string, callback: (error?: Error | null) => void): void {
        // অ্যারে-তে তথ্য যোগ করা
        this.arr.push(dato);
        callback(); // প্রসেস শেষ জানাতে callback কল করা
    }

    _final(callback: (error?: Error | null) => void): void {
        // শেষ করা এবং সংগ্রহ করা তথ্য ফেরত দেওয়া
        console.log('লিখিত তথ্য:', this.arr);
        callback(); // প্রবাহ শেষ
    }

    getDatos(): any[] {
        return this.arr; // সংরক্ষিত তথ্য অ্যাক্সেস করার জন্য পদ্ধতি
    }
}

// রূপান্তর শ্রেণী
class রূপান্তর extends Transform {
    constructor(opciones?: TransformOptions) {
        super(opciones);
    }

    _transform(dato: any, codificacion: string, callback: (error?: Error | null, resultado?: any) => void): void {
        // প্রাপ্ত তথ্য রূপান্তর (যেমন, বড় হাতের অক্ষরে রূপান্তর)
        const resultado = dato.toString().toUpperCase();
        callback(null, resultado); // রূপান্তরিত ফলাফল ফেরত দেওয়া
    }
}

// ডুপ্লেক্স শ্রেণী (পঠন এবং লেখন)
class ডুপ্লেক্স extends Duplex {
    constructor(opciones?: DuplexOptions) {
        super(opciones);
    }

    _read(tamaño: number): void {
        // প্রবাহে তথ্য প্রেরণ
        this.push('ডুপ্লেক্স প্রবাহের তথ্য');
        this.push(null); // আর কোন তথ্য নেই নির্দেশ করা
    }

    _write(dato: any, codificacion: string, callback: (error?: Error | null) => void): void {
        // প্রাপ্ত তথ্য প্রক্রিয়া করা
        console.log('ডুপ্লেক্সে লেখা হচ্ছে:', dato);
        callback(); // প্রসেস শেষ জানাতে callback কল করা
    }
}

// পাসথ্রু শ্রেণী
class পাসথ্রু extends PassThrough {
    constructor(opciones?: DuplexOptions) {
        super(opciones);
    }
}

// শ্রেণীসমূহ রপ্তানি করা
const স্ট্রীমবাংলায় = {
    পঠন,
    লেখন,
    রূপান্তর,
    ডুপ্লেক্স,
    পাসথ্রু
};

export default স্ট্রীমবাংলায়;
