import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import api from '../utils/api';
import { useRouter } from 'next/router';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useDropzone } from 'react-dropzone';

export default function Dashboard({ darkMode, toggleDarkMode }) {
  const router = useRouter();
  const [contents, setContents] = useState([]);
  const [file, setFile] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({ onDrop: acceptedFiles => setFile(acceptedFiles[0]) });

  const fetchContents = async () => {
    try {
      const res = await api.get('/content');
      setContents(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const uploadFile = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    try {
      await api.post('/content/upload', formData);
      setFile(null);
      fetchContents();
    } catch (err) {
      console.error(err);
      alert('Upload failed');
    }
  };

  useEffect(() => {
    fetchContents();
  }, []);

  return (
    <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }}>
        <input {...getInputProps()} />
        {file ? <p>{file.name}</p> : <p>Drag and drop a file here, or click to select</p>}
      </div>
      <Button variant="contained" sx={{ mt: 2 }} onClick={uploadFile}>
        Upload
      </Button>
      <List sx={{ mt: 4 }}>
        {contents.map(item => (
          <ListItem key={item._id}>{item.name}</ListItem>
        ))}
      </List>
    </Layout>
  );
}
