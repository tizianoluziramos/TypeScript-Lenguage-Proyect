// lodash-বাংলা.ts
import _ from 'lodash';

const lodashBn = {
    // অ্যারে ম্যানিপুলেশন পদ্ধতি
    যোগ: (array: any[], মান: any) => _.concat(array, মান), // _.concat
    মুছেফেলুন: (array: any[], মান: any) => _.pull(array, মান), // _.pull
    ফিল্টার: (array: any[], শর্ত: (মান: any) => boolean) => _.filter(array, শর্ত), // _.filter
    ম্যাপ: (array: any[], রূপান্তর: (মান: any) => any) => _.map(array, রূপান্তর), // _.map
    হ্রাস: (array: any[], একত্রিতকারী: (অবস্থা: any, মান: any) => any, প্রাথমিক?: any) => _.reduce(array, একত্রিতকারী, প্রাথমিক), // _.reduce
    খুঁজুন: (array: any[], শর্ত: (মান: any) => boolean) => _.find(array, শর্ত), // _.find
    সাজান: (array: any[], কী: string | string[]) => _.orderBy(array, [কী]), // _.orderBy
    বিপরীত: (array: any[]) => _.reverse(array), // _.reverse
    যুক্ত: (array: any[], বিভাজক: string = ',') => _.join(array, বিভাজক), // _.join

    // অবজেক্ট ম্যানিপুলেশন পদ্ধতি
    পাওয়া: (অবজেক্ট: object, কী: string) => _.get(অবজেক্ট, কী), // _.get
    সেট: (অবজেক্ট: object, কী: string, মান: any) => _.set(অবজেক্ট, কী, মান), // _.set
    বৈশিষ্ট্যমুছেফেলুন: (অবজেক্ট: object, কী: string) => _.unset(অবজেক্ট, কী), // _.unset
    একত্রিত: (...অবজেক্ট: object[]) => _.merge({}, ...অবজেক্ট), // _.merge
    ক্লোন: (অবজেক্ট: object) => _.cloneDeep(অবজেক্ট), // _.cloneDeep
    কীসমূহ: (অবজেক্ট: object) => _.keys(অবজেক্ট), // _.keys
    মানসমূহ: (অবজেক্ট: object) => _.values(অবজেক্ট), // _.values
    এন্ট্রি: (অবজেক্ট: object) => _.toPairs(অবজেক্ট), // _.toPairs

    // স্ট্রিং ম্যানিপুলেশন পদ্ধতি
    বৃহত্তর: (পাঠ্য: string) => _.toUpper(পাঠ্য), // _.toUpper
    ক্ষুদ্র: (পাঠ্য: string) => _.toLower(পাঠ্য), // _.toLower
    শিরোনামিত: (পাঠ্য: string) => _.capitalize(পাঠ্য), // _.capitalize
    প্রতিস্থাপন: (পাঠ্য: string, খোঁজ: string, প্রতিস্থাপন: string) => _.replace(পাঠ্য, খোঁজ, প্রতিস্থাপন), // _.replace
    ভাগ: (পাঠ্য: string, বিভাজক: string) => _.split(পাঠ্য, বিভাজক), // _.split

    // ইউটিলিটি মেথড
    পরিচয়: (মান: any) => _.identity(মান), // _.identity
    ধ্রুবক: (মান: any) => _.constant(মান), // _.constant
    এলোমেলো: (ন্যূনতম: number, সর্বাধিক: number) => _.random(ন্যূনতম, সর্বাধিক), // _.random
    এখন: () => _.now(), // _.now
};

// স্প্যানিশে মডিউল এক্সপোর্ট
export default lodashBn;
