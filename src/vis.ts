import {Gate} from "./gate"

export class VisObj extends Gate {
    public constructor(){
        super();
        this.onChanged = (inA : boolean, inB : boolean) => {
            return inA == inB; // output is unimportant
        }
    }
    protected update(isOn : boolean){
        console.log("Unimplemented Visualization Object : on ? " + isOn);
    }

    public set(isOn : boolean) {
        this.update(isOn);
    }
}

export class Light extends VisObj {

    protected update(isOn : boolean){
        console.log("Light : " + (isOn? "on" : "off"));
    }
}