export class ApiResponse {

    data?: any
    message: string;
    status: any


    constructor (message: string,status: any,data?:any,){
        this.data=data;
        this.message=message;
        this.status= status

    }

   static success (message:string,status:any,data?:any){
        return new ApiResponse(message,status,data)
    }

   static error(message:string,status:any){
        return new ApiResponse(message,status)
    }
}