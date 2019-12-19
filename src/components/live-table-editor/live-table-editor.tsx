import { Component, Prop, h, Element, State } from "@stencil/core";
import { rotateValues, filterRows } from "../../utils";
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
  @State() filteredRows: Array<any>;

  componentDidLoad() {
    const parsedData = JSON.parse(this.data);
    this.headerObj = Object.keys(parsedData);
    this.bodyObj = rotateValues(parsedData, this.columns, this.rows);
    this.filteredRows = this.bodyObj;
  }

  handleFilter = e => {
    this.filteredRows = filterRows(this.bodyObj, e.target.value);
  };

  render() {
    return (
      <div>
        <div>
          {this.searchable ? (
            <input
              onInput={e => this.handleFilter(e)}
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
            {this.filteredRows.length > 0
              ? this.filteredRows.map(x => (
                  <tr>
                    {x.map(y => (
                      <td contentEditable>{y}</td>
                    ))}
                  </tr>
                ))
              : "No records to display"}
          </tbody>
        </table>
      </div>
    );
  }
}
