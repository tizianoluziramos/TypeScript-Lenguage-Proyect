export class 敏捷开发测试 {

    private 任务列表: string[];

    constructor(任务列表: string[]) {
        this.任务列表 = 任务列表;
    }

    private 计划冲刺(): void {
        console.log("\n--- 冲刺计划 ---");
        console.log("待完成的任务:");
        this.任务列表.forEach((任务, 索引) => console.log(`- 任务 ${索引 + 1}: ${任务}`));
    }

    private 每日站会(): void {
        console.log("\n--- 每日站会 ---");
        console.log("团队的进展和阻碍。");
    }

    private 冲刺回顾(): void {
        console.log("\n--- 冲刺回顾 ---");
        console.log("展示已完成任务和增加的产品内容给客户。");
    }

    private 冲刺反思(): void {
        console.log("\n--- 冲刺反思 ---");
        console.log("对成功的方面和改进的可能性进行反思。");
    }

    public 执行冲刺(): void {
        this.计划冲刺();
        this.每日站会();
        this.冲刺回顾();
        this.冲刺反思();
        console.log("\n冲刺结束。");
    }
}
