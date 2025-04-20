const URL: string = "http://localhost:8000/api/v1";
const uploadPDF = async (FormData: FormData) => {
  try {
    await fetch(URL + "/upload/pdf", {
      method: "POST",
      body: FormData,
    });
    console.log("File Uploaded");
  } catch (error) {
    console.log(error);
  }
};

export { uploadPDF };
