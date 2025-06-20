import { Component } from '@angular/core';
import GcPdfViewer from '@grapecity/gcpdfviewer';

@Component({
  selector: 'app-dataprivacy',
  templateUrl: './dataprivacy.component.html',
  styleUrls: ['./dataprivacy.component.css']
})
export class DataprivacyComponent {
  ngAfterViewInit() {
    const viewer = new GcPdfViewer("#viewer", {
      workerSrc: "//node_modules/@grapecity/gcpdfviewer/gcpdfviewer.worker.js",
      restoreViewStateOnLoad: false
    });
    viewer.addDefaultPanels();
    viewer.open("/assets/pdf/a.pdf");
  }
}
