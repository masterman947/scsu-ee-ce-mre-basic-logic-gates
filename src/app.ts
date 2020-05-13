import * as MRE from '@microsoft/mixed-reality-extension-sdk';

export default class HelloWorld {
	private assets: MRE.AssetContainer;

	constructor(private context: MRE.Context, private baseUrl: string) {
		this.context.onStarted(() => this.started());
	}

	private started() {
		this.assets = new MRE.AssetContainer(this.context);
		

	}
}
