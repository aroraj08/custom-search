
export class Filter {
    key: string;
    operator: string;
    value: string;
    condition?: string;
    index?: number;
    hasChildren: boolean = false;
    isPartOfBracket: boolean = false;
    childFilters: Filter[] = [];

    constructor(key: string, operator: string, value: string, condition: string) {
        this.key = key;
        this.operator = operator;
        this.value = value;
        this.condition = condition;
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

    setIndex(index: number) {
        this.index = index;
    }
}