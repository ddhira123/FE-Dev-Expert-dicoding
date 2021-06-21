class CustomFooter extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowDOM.innerHTML = `
       <style>
       * {
            margin: auto;
            padding: auto;
        }
        :host {
            display: block;
            width: 100%;
            background-color: #aaa;
            padding-top: 8px;
            padding-bottom: 8px;
            text-align: center;
            margin-bottom: 0;
            margin-right: 0;
            margin-left: 0;
            margin-top: 4px;
        }
        .center {
            color: #fff;
        }
       </style>
       <footer>
            <div class="center">
                Copyright © 2021 - RestoList - All Rights Reserved.
            </div>
        </footer>
       `;
	}
}

customElements.define("custom-footer", CustomFooter);
