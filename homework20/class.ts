type ValueType = string | number | boolean | undefined | null;

export class ObjectManipulator {

    constructor(protected obj: Record<string, ValueType>) {
    }

    public set(key: string, value: ValueType) {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get(key: string): ValueType {
        return this.obj[key];
    }

    public delete(key: string) {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): Record<string, ValueType> {
        return this.obj;
    }
}
