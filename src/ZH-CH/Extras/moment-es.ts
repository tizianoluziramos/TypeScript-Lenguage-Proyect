// moment-es.ts
import moment from 'moment';

const 时刻 = {
    // 获取当前日期和时间
    现在: () => moment(),

    // 格式化日期
    格式化: (日期: moment.Moment, 格式: string) => 日期.format(格式),

    // 加时间
    加: (日期: moment.Moment, 数量: number, 单位: moment.unitOfTime.DurationConstructor) => 
        日期.add(数量, 单位),

    // 减时间
    减: (日期: moment.Moment, 数量: number, 单位: moment.unitOfTime.DurationConstructor) => 
        日期.subtract(数量, 单位),

    // 获取一天的开始
    一天开始: (日期: moment.Moment) => 日期.startOf('day'),

    // 获取一天的结束
    一天结束: (日期: moment.Moment) => 日期.endOf('day'),

    // 比较日期
    在前: (日期1: moment.Moment, 日期2: moment.Moment) => 日期1.isBefore(日期2),
    在后: (日期1: moment.Moment, 日期2: moment.Moment) => 日期1.isAfter(日期2),
    相等: (日期1: moment.Moment, 日期2: moment.Moment) => 日期1.isSame(日期2),

    // 获取差异
    差异: (日期1: moment.Moment, 日期2: moment.Moment, 单位: moment.unitOfTime.Diff) => 
        日期1.diff(日期2, 单位),

    // 获取星期几
    星期几: (日期: moment.Moment) => 日期.day(),

    // 获取月份
    月份: (日期: moment.Moment) => 日期.month(),

    // 获取年份
    年份: (日期: moment.Moment) => 日期.year(),

    // 日期操作函数
    下个月: (日期: moment.Moment) => 日期.add(1, 'months'),
    上个月: (日期: moment.Moment) => 日期.subtract(1, 'months'),

    // 获取持续时间
    持续时间: (持续时间: number, 单位: moment.unitOfTime.DurationConstructor) => 
        moment.duration(持续时间, 单位),

    // 持续时间格式化方法
    格式化持续时间: (持续时间: moment.Duration, 格式: string) => 
        持续时间.humanize(),
};

export default 时刻;
