"use client";
import { Upload } from "lucide-react";
import * as React from "react";
import { uploadPDF } from "../api";

const FileUplaodComponent: React.FC = () => {
  const handleFileUpload = () => {
    const el = document.createElement("input");
    el.setAttribute("type", "file");
    el.setAttribute("accept", "application/pdf");
    el.addEventListener("change", (event) => {
      if (el.files && el.files.length > 0) {
        const file = el.files.item(0);
        console.log(file);
        if (file) {
          const formData = new FormData();
          formData.append("pdf", file);
          uploadPDF(formData);
        }
      }
    });
    el.click();
  };

  return (
    <div className="bg-slate-900 text-white shadow-2xl flex justify-center items-center p-4 rounded-2xl border-1 boreder-white">
      <div
        onClick={handleFileUpload}
        className="flex flex-col items-center justify-center"
      >
        <h3>Upload a PDF File</h3>
        <Upload />
      </div>
    </div>
  );
};

export { FileUplaodComponent };
