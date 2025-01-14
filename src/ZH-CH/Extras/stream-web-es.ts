// stream-web-es.ts
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

// 读取类
class 读取 extends Readable {
    constructor(选项?: ReadableOptions) {
        super(选项);
    }

    _read(大小: number): void {
        // 自定义的 _read 方法实现
        this.push('示例数据'); // 发送示例数据
        this.push(null); // 结束流
    }

    static 从数组(arr: any[]): 读取 {
        const 流 = new 读取();
        arr.forEach(数据 => 流.push(数据));
        流.push(null); // 结束流
        return 流;
    }
}

// 写入类
class 写入 extends Writable {
    private arr: any[] = []; // 存储数据

    constructor(选项?: WritableOptions) {
        super(选项);
    }

    _write(数据: any, 编码: string, 回调: (error?: Error | null) => void): void {
        // 将数据添加到数组中
        this.arr.push(数据);
        回调(); // 调用回调以指示已处理
    }

    _final(回调: (error?: Error | null) => void): void {
        // 结束并返回累积的数据
        console.log('写入的数据:', this.arr);
        回调(); // 结束流
    }

    获取数据(): any[] {
        return this.arr; // 访问存储数据的方法
    }
}

// 转换类
class 转换 extends Transform {
    constructor(选项?: TransformOptions) {
        super(选项);
    }

    _transform(数据: any, 编码: string, 回调: (error?: Error | null, 结果?: any) => void): void {
        // 转换接收到的数据（例如，转换为大写）
        const 结果 = 数据.toString().toUpperCase();
        回调(null, 结果); // 返回转换后的结果
    }
}

// 双工类（读取和写入）
class 双工 extends Duplex {
    constructor(选项?: DuplexOptions) {
        super(选项);
    }

    _read(大小: number): void {
        // 在流中发送数据
        this.push('双工流中的数据');
        this.push(null); // 表示没有更多数据
    }

    _write(数据: any, 编码: string, 回调: (error?: Error | null) => void): void {
        // 处理接收到的数据
        console.log('写入双工:', 数据);
        回调(); // 调用回调以指示已处理
    }
}

// 透传类
class 透传 extends PassThrough {
    constructor(选项?: DuplexOptions) {
        super(选项);
    }
}

// 导出类
const 流在中文 = {
    读取,
    写入,
    转换,
    双工,
    透传
};

export default 流在中文;
