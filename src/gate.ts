
export class Gate {

    private inputA : boolean;
    private inputB : boolean;
    private output : boolean; 

    protected onChanged : (inA : boolean, inB : boolean)=>boolean;

    public setInputA(inp : boolean){
        this.inputA = inp;
        this.output = this.onChanged(this.inputA, this.inputB);
    }

    public setInputB(inp : boolean){
        this.inputB = inp;
        this.output = this.onChanged(this.inputA, this.inputB);
    }

    public getOutput() : boolean {
        return this.output;
    }
}

export class Switch extends Gate {

    public constructor(){
        super();
        this.onChanged = (inA : boolean, inB : boolean) => {
            inA = inB;// Only bc I hate the linter warnings
            inB = inA;//
            return false;
        }
    }
}

//Gates  Or, And, Not, Nand, Nor, Xor, Xnor, 

export class GateOr extends Gate {

    public constructor(){
        super();
        this.onChanged = (inA : boolean, inB : boolean) => {
            return inA || inB;
        }
    }
}
export class GateAnd extends Gate {

    public constructor(){
        super();
        this.onChanged = (inA : boolean, inB : boolean) => {
            return inA && inB;
        }
    }
}

export class GateNot extends Gate {

    public constructor(){
        super();
        this.onChanged = (inA : boolean, inB : boolean) => {
            return !inA;
        }
    }
}

export class GateNand extends Gate {

    public constructor(){
        super();
        this.onChanged = (inA : boolean, inB : boolean) => {
            return !(inA && inB);
        }
    }
}

export class GateNor extends Gate {

    public constructor(){
        super();
        this.onChanged = (inA : boolean, inB : boolean) => {
            return !(inA || inB);
        }
    }
}

export class GateXor extends Gate {

    public constructor(){
        super();
        this.onChanged = (inA : boolean, inB : boolean) => {
            return !(inA === inB);
        }
    }
}

export class GateXnor extends Gate {

    public constructor(){
        super();
        this.onChanged = (inA : boolean, inB : boolean) => {
            return inA === inB;
        }
    }
}









