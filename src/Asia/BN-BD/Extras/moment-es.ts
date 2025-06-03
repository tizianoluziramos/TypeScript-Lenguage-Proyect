// moment-বাংলা.ts
import moment from 'moment';

const momentBn = {
    // বর্তমান তারিখ এবং সময় পাওয়া
    এখন: () => moment(),

    // তারিখ ফরম্যাট করা
    ফরম্যাট: (তারিখ: moment.Moment, ফরম্যাট: string) => তারিখ.format(ফরম্যাট),

    // সময় যোগ করা
    যোগ: (তারিখ: moment.Moment, পরিমাণ: number, একক: moment.unitOfTime.DurationConstructor) => 
        তারিখ.add(পরিমাণ, একক),

    // সময় বিয়োগ করা
    বিয়োগ: (তারিখ: moment.Moment, পরিমাণ: number, একক: moment.unitOfTime.DurationConstructor) => 
        তারিখ.subtract(পরিমাণ, একক),

    // দিনের শুরু পাওয়া
    দিনেরশুরু: (তারিখ: moment.Moment) => তারিখ.startOf('day'),

    // দিনের শেষ পাওয়া
    দিনেরশেষ: (তারিখ: moment.Moment) => তারিখ.endOf('day'),

    // তারিখ তুলনা করা
    আগে: (তারিখ1: moment.Moment, তারিখ2: moment.Moment) => তারিখ1.isBefore(তারিখ2),
    পরে: (তারিখ1: moment.Moment, তারিখ2: moment.Moment) => তারিখ1.isAfter(তারিখ2),
    সমান: (তারিখ1: moment.Moment, তারিখ2: moment.Moment) => তারিখ1.isSame(তারিখ2),

    // পার্থক্য পাওয়া
    পার্থক্য: (তারিখ1: moment.Moment, তারিখ2: moment.Moment, একক: moment.unitOfTime.Diff) => 
        তারিখ1.diff(তারিখ2, একক),

    // সপ্তাহের দিন পাওয়া
    সপ্তাহেরদিন: (তারিখ: moment.Moment) => তারিখ.day(),

    // মাস পাওয়া
    মাস: (তারিখ: moment.Moment) => তারিখ.month(),

    // বছর পাওয়া
    বছর: (তারিখ: moment.Moment) => তারিখ.year(),

    // তারিখ পরিবর্তন করার ফাংশন
    পরবর্তীমাস: (তারিখ: moment.Moment) => তারিখ.add(1, 'months'),
    পূর্ববর্তীমাস: (তারিখ: moment.Moment) => তারিখ.subtract(1, 'months'),

    // সময়কাল পাওয়া
    সময়কাল: (সময়কাল: number, একক: moment.unitOfTime.DurationConstructor) => 
        moment.duration(সময়কাল, একক),

    // সময়কাল ফরম্যাট করার পদ্ধতি
    সময়কালফরম্যাট: (সময়কাল: moment.Duration, ফরম্যাট: string) => 
        সময়কাল.humanize(),
};

export default momentBn;
