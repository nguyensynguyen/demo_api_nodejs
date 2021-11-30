class Success{
    constructor(status,data){
        this.status = status
        this.data = data
    }

    formatJsonResponse(){
        return {
            "status": this.status,
            "data": this.data
        }
    }
}

class Errors{
    constructor(status,error){
        this.status = status
        this.error = error
    }

    formatJsonResponse(){
        return {
            "status": this.status,
            "error": this.error
        }
    }
}

module.exports = {Success , Errors}