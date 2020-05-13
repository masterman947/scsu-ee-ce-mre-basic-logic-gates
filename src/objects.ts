import * as MRE from '@microsoft/mixed-reality-extension-sdk';
import * as Gates from "./gate";
import * as Vis from "./vis";


export class BasicObj {
    protected self : MRE.Actor;
    
    public onUserInteract(){}
}

export class Switch extends BasicObj {
    protected logic = Gates.Switch;

}

export class Light extends BasicObj {
    protected vis : Vis.Light;

}