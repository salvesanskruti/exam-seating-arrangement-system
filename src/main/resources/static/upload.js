// CSV Upload
document.getElementById("csv-upload-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const fileInput = document.getElementById("csv-file");
    if (!fileInput.files.length) {
        alert("Please select a CSV file to upload.");
        return;
    }

    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    fetch("/api/upload/csv", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(msg => {
        alert("✅ " + msg);
        fileInput.value = ""; // reset file input
    })
    .catch(error => {
        console.error("CSV Upload failed:", error);
        alert("❌ CSV Upload failed. See console for details.");
    });
});

// Excel Upload
document.getElementById("excel-upload-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const fileInput = document.getElementById("excel-file");
    if (!fileInput.files.length) {
        alert("Please select an Excel file to upload.");
        return;
    }

    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    fetch("/api/upload/excel", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(msg => {
        alert("✅ " + msg);
        fileInput.value = ""; // reset file input
    })
    .catch(error => {
        console.error("Excel Upload failed:", error);
        alert("❌ Excel Upload failed. See console for details.");
    });
});
