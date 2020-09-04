export class JobHistoryModel{
    serialNo: number;
    ESPJobName: string;
    SQLJobName: string;
    serverName: string;
    jobExecutionDate: string;
    jobExecutionTime: string;
    jobStatus: string;
    Duration: string;

    constructor(){
        this.serialNo = 0;
        this.ESPJobName = '';
        this.SQLJobName = '';
        this.serverName = '';
        this.jobExecutionDate = '';
        this.jobExecutionTime = '';
        this.jobStatus = '';
        this.Duration = '';
    }
}