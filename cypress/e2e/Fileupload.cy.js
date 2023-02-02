import "cypress-file-upload";

describe("File uploads", () => {
  it("Single file upload", () => {
    cy.visit("http://the-internet.herokuapp.com/upload");

    // attachfile() this method only identified the file  in fixtures folder
    // whatever file want to upload keep the file in fixtures folder
    cy.get("#file-upload").attachFile("dummy.pdf");
    cy.get("#file-submit").click();
    cy.wait(5000);
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
  });

  it("File upload - Rename", () => {
    cy.visit("http://the-internet.herokuapp.com/upload");

    // attachfile() this method only identified the file  in fixtures folder
    // whatever file want to upload keep the file in fixtures folder
    cy.get("#file-upload").attachFile({
      filePath: "dummy.pdf",
      fileName: "myfile.pdf",
    }); // rename file from dummy.pdf to myfile.pdf
    cy.get("#file-submit").click();
    cy.wait(5000);
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
  });

  it("File upload - Drag and drop", () => {
    cy.visit("http://the-internet.herokuapp.com/upload");

    cy.get("#drag-drop-upload").attachFile("pdf-test.pdf", {
      subjectType: "drag-n-drop",
    });

    cy.wait(5000);

    cy.get(
      "#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span"
    ).contains("pdf-test.pdf");
  });

  it("Multiple file upload", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
    cy.get("#filesToUpload").attachFile(["dummy.pdf", "pdf-test.pdf"]);
    cy.wait(5000);

    cy.get(":nth-child(6) > strong").should("contain", "Files You Selected:");
  });

  it.only("File upload - Shadow Dom", () => {
    cy.visit(
      "https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm"
    );
    cy.get(".smart-browse-input", { includeShadowDom: true }).attachFile(
      "dummy.pdf"
    );
    cy.wait(5000);

    cy.get(".smart-item-name", { includeShadowDom: true }).contains(
      "dummy.pdf"
    );
  });
});
