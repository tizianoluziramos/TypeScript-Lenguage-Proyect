// readlineUtil.ts
import * as rls from "readline-sync";

const rls工具 = {
    提问: (消息: string): string => rls.question(消息),
    提问整数: (消息: string): number => rls.questionInt(消息),
    提问是或否: (消息: string): boolean => rls.keyInYNStrict(消息),
    暂停: (...args: any[]): void => rls.keyInPause(...args),
    提问带验证: (消息: string, 验证: (输入: string) => boolean): string => {
        let 回答: string;
        do {
            回答 = rls.question(消息);
        } while (!验证(回答));
        return 回答;
    },
    显示消息: (消息: string): void => console.log(消息),
    密码带输入: (消息: string): string => rls.question(消息, { hideEchoBack: true }),
    读取: () => rls.keyIn('按任意键继续...'),
};

export default rls工具;
