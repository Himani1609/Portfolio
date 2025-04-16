document.getElementById("download-resume-btn").addEventListener("click", function () {
    const link = document.createElement('a');
    link.href = "./HimaniBansalResume.pdf"; 
    link.download = "HimaniBansalResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
