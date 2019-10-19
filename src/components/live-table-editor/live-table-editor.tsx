import { Component, Prop, h } from "@stencil/core";
import { format } from "../../utils/utils";
@Component({
  tag: "live-table-editor",
  styleUrl: "live-table-editor.css",
  shadow: true
})
export class LiveTableEditor {
  /**
   * width of the editor
   */
  @Prop() width: number;

  /**
   * height of the editor
   */
  @Prop() height: number;

  /**
   * enable editing
   */
  @Prop() edit: boolean;

  @Prop() data: string;


  render() {
    return (
      <div class="editor">
        {this.width}
        {this.height}
        {this.data}
      </div>
    );
  }
}
