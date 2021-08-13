//For more information please see:
//https://www.typescriptlang.org/docs/handbook/namespaces.html
namespace Example {
    export interface HiWorldConfig {
        ElementId: string,
        Name: string
    }

    export class HiWorld {

        #ElementId: string;
        #Name: string;

        constructor(config: HiWorldConfig) {
            this.#ElementId = config.ElementId;
            this.#Name = config.Name;

            $("#" + this.#ElementId).html("Hi " + this.#Name);
        }
    }
}
var HiWorldApp = new Example.HiWorld({ ElementId: "root", Name: "Joe" });