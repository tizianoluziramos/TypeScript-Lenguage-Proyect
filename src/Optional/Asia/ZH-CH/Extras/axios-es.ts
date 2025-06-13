import axios from 'axios';

const 阿克希欧斯 = {
    // 从URL获取数据的函数
    获取: async (url: string) => {
        try {
            const 响应 = await axios.get(url);
            return 响应.data;
        } catch (错误) {
            console.error('获取数据时出错:', 错误);
            throw 错误;
        }
    },

    // 向URL发送数据的函数
    发送: async (url: string, 数据: any) => {
        try {
            const 响应 = await axios.post(url, 数据);
            return 响应.data;
        } catch (错误) {
            console.error('发送数据时出错:', 错误);
            throw 错误;
        }
    },

    // 更新URL中数据的函数
    更新: async (url: string, 数据: any) => {
        try {
            const 响应 = await axios.put(url, 数据);
            return 响应.data;
        } catch (错误) {
            console.error('更新数据时出错:', 错误);
            throw 错误;
        }
    },

    // 在URL中删除数据的函数
    删除: async (url: string) => {
        try {
            const 响应 = await axios.delete(url);
            return 响应.data;
        } catch (错误) {
            console.error('删除数据时出错:', 错误);
            throw 错误;
        }
    }
};

export default 阿克希欧斯;
