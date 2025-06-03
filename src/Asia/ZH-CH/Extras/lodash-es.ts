// lodash-es.ts
import _ from 'lodash';

const 洛达什 = {
    // 数组操作方法
    添加: (数组: any[], 值: any) => _.concat(数组, 值), // _.concat
    删除: (数组: any[], 值: any) => _.pull(数组, 值), // _.pull
    过滤: (数组: any[], 谓词: (值: any) => boolean) => _.filter(数组, 谓词), // _.filter
    映射: (数组: any[], 转换: (值: any) => any) => _.map(数组, 转换), // _.map
    归纳: (数组: any[], 累加器: (累: any, 值: any) => any, 初始?: any) => _.reduce(数组, 累加器, 初始), // _.reduce
    查找: (数组: any[], 谓词: (值: any) => boolean) => _.find(数组, 谓词), // _.find
    排序: (数组: any[], 键: string | string[]) => _.orderBy(数组, [键]), // _.orderBy
    反转: (数组: any[]) => _.reverse(数组), // _.reverse
    连接: (数组: any[], 分隔符: string = ',') => _.join(数组, 分隔符), // _.join

    // 对象操作方法
    获取: (对象: object, 键: string) => _.get(对象, 键), // _.get
    设置: (对象: object, 键: string, 值: any) => _.set(对象, 键, 值), // _.set
    删除属性: (对象: object, 键: string) => _.unset(对象, 键), // _.unset
    合并: (...对象: object[]) => _.merge({}, ...对象), // _.merge
    克隆: (对象: object) => _.cloneDeep(对象), // _.cloneDeep
    键值: (对象: object) => _.keys(对象), // _.keys
    值: (对象: object) => _.values(对象), // _.values
    条目: (对象: object) => _.toPairs(对象), // _.toPairs

    // 字符串操作方法
    大写: (文本: string) => _.toUpper(文本), // _.toUpper
    小写: (文本: string) => _.toLower(文本), // _.toLower
    首字母大写: (文本: string) => _.capitalize(文本), // _.capitalize
    替换: (文本: string, 查找: string, 替换: string) => _.replace(文本, 查找, 替换), // _.replace
    切分: (文本: string, 分隔符: string) => _.split(文本, 分隔符), // _.split

    // 工具方法
    身份: (值: any) => _.identity(值), // _.identity
    常量: (值: any) => _.constant(值), // _.constant
    随机: (最小: number, 最大: number) => _.random(最小, 最大), // _.random
    现在: () => _.now(), // _.now
};

// 导出西班牙语模块
export default 洛达什;
