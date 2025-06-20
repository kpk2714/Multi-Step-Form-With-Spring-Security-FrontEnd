import { Component } from '@angular/core';
import GcPdfViewer from '@grapecity/gcpdfviewer';

@Component({
  selector: 'app-proof-of-age',
  templateUrl: './proof-of-age.component.html',
  styleUrls: ['./proof-of-age.component.css']
})
export class ProofOfAgeComponent {

  ngAfterViewInit() {
    const viewer = new GcPdfViewer("#viewer", {
      workerSrc: "//node_modules/@grapecity/gcpdfviewer/gcpdfviewer.worker.js",
      restoreViewStateOnLoad: false
    });
    viewer.addDefaultPanels();
    viewer.open("/assets/pdf/a.pdf");
  }
}
