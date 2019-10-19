import { Component, Prop, h } from "@stencil/core";
import { format } from "../../utils/utils";
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
    this.createTable();
  }
  createTable(){
let table = ""
    for (let i = 0; i < this.rows; i++){
      let tr = "<tr>"
      for (let i = 0; i < this.columns; i++){
        tr+=`<td>row ${i}</td>`;

      }
      tr+= "</tr>"
      table += tr
    }
        this.el.shadowRoot.getElementById("editor").innerHTML = table

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
