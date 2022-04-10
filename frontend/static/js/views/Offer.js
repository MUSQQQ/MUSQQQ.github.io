import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Oferta");
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
<h1 position="center">Bogata oferta gitar basowych</h1>
</div>
<div style="overflow-x:auto;">
  <table>
  <tr>
    <td>
        <div class=product>

            <img src="https://images.musicstore.de/images/1600/rockson-pb-electric-bass-black_1_BAS0010467-000.jpg" alt="bss">
            <h2>Product 1</h2>
           <h2><a href="">Buy for 113.99</a></h2>
        </div>
    </td>
    <td>
        <div class=product>
<img src="https://images.musicstore.de/images/1600/j-und-d-bass-guitar-jb-mini-sfg-surf-green_1_BAS0007169-000.jpg" alt="bass">
<h2>Product 2</h2>
<h2><a href="">Buy for 157.99</a></h2>
        </div>
    </td>
    <td>
        <div class=product>
<img src="https://images.musicstore.de/images/0960/j-und-d-bass-guitar-150-special-bat-mark-bkm_1_BAS0002328-000.jpg" alt="bass">
<h2>Product 3</h2>
<h2><a href="">Buy for 89.99</a></h2>
        </div>
    </td>
  </tr>
  <tr>
    <td>
        <div class=product>
<img src="https://images.musicstore.de/images/1600/j-und-d-bass-guitar-jb-mini-sbl-sonic-blue_1_BAS0007170-000.jpg" alt="bass">
<h2>Product 4</h2>
<h2><a href="">Buy for 230.99</a></h2>
        </div>
    </td>
    <td>
        <div class=product>
<img src="https://images.musicstore.de/images/1600/j-und-d-mmb-bass-vintage-white_1_BAS0011776-000.jpg" alt="bass">
<h2>Product 5</h2>
<h2><a href="">Buy for 100.99</a></h2>
        </div>
    </td>
    <td>
        <div class=product>

<img src="https://images.musicstore.de/images/0960/j-und-d-mmb-bass-surf-green_1_BAS0011777-000.jpg" alt="bass">
<h2>Product 6</h2>
<h2><a href="">Buy for 321.99</a></h2>
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