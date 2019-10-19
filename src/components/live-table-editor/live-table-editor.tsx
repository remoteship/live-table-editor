import { Component, Prop, h, Element } from "@stencil/core";

@Component({
  tag: "live-table-editor",
  styleUrl: "live-table-editor.css",
  shadow: true
})
export class LiveTableEditor {
  /**
   * int value for the width of the editor
   */
  @Prop() width: number;
  /**
   * int value for the height of the editor
   */
  @Prop() height: number;
  /**
   * boolean value for enable editing
   */
  @Prop() edit: boolean;
  /*
   * string value for the  JSON data
  */
  @Prop() data: string;
  /*
  * int value for ammount of rows
  */
  @Prop() rows: number;
  /*
  * int value for ammount of columns
  */
  @Prop() columns: number;

  @Element() el: HTMLElement;
  componentDidLoad() {
    let jsonData = JSON.parse(this.data);
    this.createTable(jsonData);
  }
  
  createTable(data:object){
    let table = "";
    let tableHeader = Object.keys(data);
    let tableValues = Object.values(data);
    for (let i = 0; i <= this.rows; i++){
      console.log("i",i)
      let tr = "<tr>"
      for (let j = 0; j < this.columns; j++){
        console.log('j',j)
        if (i == 0 ){
          tr+=`<th> ${tableHeader[j]}</th>`;
          console.log(tableHeader[j])
        } else {
          tr+=`<td contenteditable="true"> ${tableValues[j][i-1]}</td>`;
          console.log(tableValues[j]);
        }
      }
      tr+= "</tr>";
      table += tr;
    }
        this.el.shadowRoot.getElementById("editor").innerHTML = table;

  }


  editTable(){

  }

  render() {
    return (
      <div >
        <table id="editor"></table>
      </div>
    );
  }
}
