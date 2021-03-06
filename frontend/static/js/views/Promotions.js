import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Promotions");
    }

    async getHtml() {
        return `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Single Page App</title>
    <link rel="stylesheet" href="/static/css/index.css">
</head>
<body>
<div class="centerlize">
<h1>Sprawdź najnowsze promocje</h1>
</div>
<div style="overflow-x:auto;">
  <table>
  <tr>
    <td>
        <div class=product>

            <img src="https://images.musicstore.de/images/1600/j-und-d-yc-150j-5-fivestring-black-_1_BAS0000995-001.jpg" alt="bss">
            <h2>Product 1</h2>
           <h2><a href="">Buy for 113.99</a></h2>
        </div>
    </td>
    <td>
        <div class=product>
<img src="https://images.musicstore.de/images/1600/ibanez-mikro-gsrm25-bk-black_1_BAS0009317-000.jpg" alt="bass">
<h2>Product 2</h2>
<h2><a href="">Buy for 157.99</a></h2>
        </div>
    </td>
    <td>
        <div class=product>
<img src="https://images.musicstore.de/images/1600/epiphone-toby-deluxe-v-vs-vintage-sunburst_1_BAS0007561-000.jpg" alt="bass">
<h2>Product 3</h2>
<h2><a href="">Buy for 89.99</a></h2>
        </div>
    </td>
  </tr>
</table>
</div>
</body>
</html>
        `;
    }
}