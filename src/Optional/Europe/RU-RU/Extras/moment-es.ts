// moment-ru.ts
import moment from 'moment';

const momentRu = {
    // Получить текущую дату и время
    сейчас: () => moment(),

    // Форматировать дату
    форматировать: (дата: moment.Moment, формат: string) => дата.format(формат),

    // Добавить время
    добавить: (дата: moment.Moment, количество: number, единица: moment.unitOfTime.DurationConstructor) => 
        дата.add(количество, единица),

    // Вычесть время
    вычесть: (дата: moment.Moment, количество: number, единица: moment.unitOfTime.DurationConstructor) => 
        дата.subtract(количество, единица),

    // Получить начало дня
    началоДня: (дата: moment.Moment) => дата.startOf('day'),

    // Получить конец дня
    конецДня: (дата: moment.Moment) => дата.endOf('day'),

    // Сравнить даты
    до: (дата1: moment.Moment, дата2: moment.Moment) => дата1.isBefore(дата2),
    после: (дата1: moment.Moment, дата2: moment.Moment) => дата1.isAfter(дата2),
    одинаково: (дата1: moment.Moment, дата2: moment.Moment) => дата1.isSame(дата2),

    // Получить разницу
    разница: (дата1: moment.Moment, дата2: moment.Moment, единица: moment.unitOfTime.Diff) => 
        дата1.diff(дата2, единица),

    // Получить день недели
    деньНедели: (дата: moment.Moment) => дата.day(),

    // Получить месяц
    месяц: (дата: moment.Moment) => дата.month(),

    // Получить год
    год: (дата: moment.Moment) => дата.year(),

    // Функции манипуляции с датой
    следующийМесяц: (дата: moment.Moment) => дата.add(1, 'months'),
    предыдущийМесяц: (дата: moment.Moment) => дата.subtract(1, 'months'),

    // Получить продолжительность
    продолжительность: (продолжительность: number, единица: moment.unitOfTime.DurationConstructor) => 
        moment.duration(продолжительность, единица),

    // Методы форматирования продолжительности
    продолжительностьФорматированная: (продолжительность: moment.Duration, формат: string) => 
        продолжительность.humanize(),
};

export default momentRu;
