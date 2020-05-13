export class VisObj {

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