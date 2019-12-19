import { Component, Prop, h, Element, State } from "@stencil/core";
import { rotateValues } from "./../../utils/utils";
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

  @Prop() searchable: boolean;

  @Element() el: HTMLElement;

  @State() headerObj: Array<any>;
  @State() bodyObj: Array<any>;
  @State() filterData: Array<any>;

  componentDidLoad() {
    const parsedData = JSON.parse(this.data);
    this.headerObj = Object.keys(parsedData);
    this.bodyObj = rotateValues(parsedData, this.columns, this.rows);
    this.filterData = this.bodyObj;
  }

  filter = e => {
    const filterWord = e.target.value.toLowerCase();
    this.filterData = !filterWord
      ? this.bodyObj
      : this.bodyObj.filter(tr => {
          return tr.some(td => td.toLowerCase().includes(filterWord));
        });
  };

  render() {
    return (
      <div>
        <div>
          {this.searchable ? (
            <input
              onInput={e => this.filter(e)}
              type="text"
              placeholder="Search"
            ></input>
          ) : (
            ""
          )}
        </div>
        <table id="editor">
          <thead>
            <tr>
              {this.headerObj.map(x => (
                <th>{x}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.filterData.map(x => (
              <tr>
                {x.map(y => (
                  <td contentEditable>{y}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
