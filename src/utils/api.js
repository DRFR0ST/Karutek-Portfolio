import axios from 'axios';

export class ApiClient {
	constructor(url, exec) {
        this.url = url;
    }

    execute() {
        const url = this.url;

        const args = arguments;
    
        return new Promise(function(resolve, reject) {

            let exec = [];
            const arg_count = args.length;

            for (let i = 0; i < arg_count; i++){
                exec.push(args[i].exec);
              }

            axios.post(url, exec)
                .then((response) => {
                    const data = response.data;
                    for(let i = 0; i < arg_count; i++) {
                        args[i].setResult(data[i]);
                    }
                    resolve([...args]);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}

export class ApiCommand {
    constructor(exec) {
        this.exec = exec;
        this.result = null;
    }

    setResult(response) {
        this.result = this.parseResult(response);
    }

   	parseResult(response) {
        let failure = null;

        if (response.status !== undefined)
            response.status = parseInt(response.status);
        else
            failure = "status is undefined";

        if (typeof response.status !== "number")
            failure = "status is not a number or is undefined";
        else if (response.data !== undefined) {
            try {
                const data = response.status !== "204" ? this.parseData(response.status, response.data) : response.data;
                return Object.assign({}, response, { data: data });
            } catch (err) {
                typeof console !== "undefined" && console.log && console.log(err);
                return { status: 500, data: response, reason: "parse_failure: " + err.message };
            }
        } else
            return response;

    	return { status: 500, data: response, reason: "parse_failure: " + failure };
    }

    parseData(status, data) {
        return data;
    }
}


export var Posts = (function() {
    let cmd = {};

    cmd.PostList = class extends ApiCommand { 
    	constructor() {
            super();
    		this.exec = ["postList"];
    	}

    	parseData(status, data) {
            if (status !== 200) return data;
            console.log(data);
            if (!data instanceof Object)
                throw new Error("data is not a object or is undefined");

             return data;
    	}
    }


    return cmd;
})();
