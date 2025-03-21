// readlineUtil.ts
import * as rls from "readline-sync";

const rlsUtil = {
    প্রশ্ন: (বার্তা: string): string => rls.question(বার্তা),
    প্রশ্নInt: (বার্তা: string): number => rls.questionInt(বার্তা),
    প্রশ্নহ্যাঁনা: (বার্তা: string): boolean => rls.keyInYNStrict(বার্তা),
    বিরতি: (...args: any[]): void => rls.keyInPause(...args),
    প্রশ্নসিদ্ধান্তসহ: (বার্তা: string, যাচাই: (ইনপুট: string) => boolean): string => {
        let উত্তর: string;
        do {
            উত্তর = rls.question(বার্তা);
        } while (!যাচাই(উত্তর));
        return উত্তর;
    },
    বার্তা_প্রদর্শন_করুন: (বার্তা: string): void => console.log(বার্তা),
    গোপনকীসহপ্রশ্ন: (বার্তা: string): string => rls.question(বার্তা, { hideEchoBack: true }),
    পড়ুন: () => rls.keyIn('যতটুকু দ্রুত সম্ভব যেকোনো কী চাপুন...'),
};

export default rlsUtil
