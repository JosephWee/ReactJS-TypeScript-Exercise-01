interface HiWorldConfig {
    ElementId: string,
    Name: string
}

class HiWorld {

    #ElementId: string;
    #Name: string;

    constructor(config: HiWorldConfig) {
        this.#ElementId = config.ElementId;
        this.#Name = config.Name;

        $("#" + this.#ElementId).html("Hi " + this.#Name);
    }
}

var HiWorldApp = new HiWorld({ ElementId: "root", Name: "Joe" });