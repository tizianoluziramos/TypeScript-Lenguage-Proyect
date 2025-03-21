// readlineUtil.ts
import * as rls from "readline-sync";

const rlsUtil = {
    вопрос: (сообщение: string): string => rls.question(сообщение),
    вопросInt: (сообщение: string): number => rls.questionInt(сообщение),
    вопросДаНет: (сообщение: string): boolean => rls.keyInYNStrict(сообщение),
    пауза: (...args: any[]): void => rls.keyInPause(...args),
    вопросСВалидацией: (сообщение: string, валидировать: (ввод: string) => boolean): string => {
        let ответ: string;
        do {
            ответ = rls.question(сообщение);
        } while (!валидировать(ответ));
        return ответ;
    },
    показатьСообщение: (сообщение: string): void => console.log(сообщение),
    ключСВводом: (сообщение: string): string => rls.question(сообщение, { hideEchoBack: true }),
    читать: () => rls.keyIn('Нажмите любую клавишу для продолжения...'),
};

export default rlsUtil;
