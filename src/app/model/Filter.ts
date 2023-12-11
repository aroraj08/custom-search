
export class Filter {
    key: string;
    operator: string;
    value: string;
    condition?: string;

    constructor(key: string, operator: string, value: string) {
        this.key = key;
        this.operator = operator;
        this.value = value;
    }

    getKey() {
        return this.key;
    }

    getValue() {
        return this.getValue;
    }

    getOperator() {
        return this.getOperator;
    }

    setCondition(condition: string) {
        this.condition = condition;
    }
}