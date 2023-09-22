import { useEffect, useState } from "react";
import axios from "axios";
import FileList from "./FileList";

axios.defaults.baseURL = "http://localhost:3000";

const AddFile = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/documents")
      .then((response) => {
        // Axios already parses JSON responses, so you can directly access the data property.

        setData(response.data.files);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [data]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        await axios.post("/documents", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        alert("File uploaded successfully.");
      } catch (error) {
        console.error("Error uploading file:", error);
        alert("Error uploading file.");
      }
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} name="file" />
      <button onClick={handleUpload}>Enviar</button>
      <FileList files={data} />
    </div>
  );
};

export default AddFile;
