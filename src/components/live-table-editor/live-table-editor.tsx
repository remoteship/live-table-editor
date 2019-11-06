import { Component, Prop, h, Element, State } from "@stencil/core";

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

  @State() bodyObj: Array<any>;
  @State() headerObj: Array<any>;
  componentDidLoad() {
    const parsedData = JSON.parse(this.data);
    this.headerObj = Object.keys(parsedData)
    this.bodyObj = this.rotateValues(parsedData)
  }

  rotateValues(values){
   let pre =  Object.values(values)
   let after = []
    for(let c = 0; c < this.columns; c++) {
      for(let r = 0; r < this.rows; r++) {
        if (after[r]) {
          after[r].push(pre[c][r])
        } else{
          after[r] = []
          after[r].push(pre[c][r])
        }
      }
    }
    return after
  }

  render() {
    return (
      <div >
        <table id="editor">
        <thead>
          <tr>
            {this.headerObj.map((x) => <th>{x}</th>)}
          </tr>
          </thead>
          <tbody>
              {this.bodyObj.map((x) => <tr> {x.map((y) => <td  contentEditable>{y}</td>)}</tr>)}
          </tbody>
        </table>
      </div>
    );
  }
}
