import { useState } from 'react';
import { useRouter } from 'next/router';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Layout from '../components/Layout';
import api, { setAuthToken } from '../utils/api';

export default function Login({ darkMode, toggleDarkMode }) {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', formData);
      setAuthToken(res.data.token);
      router.push('/dashboard');
    } catch (err) {
      console.error(err);
      alert('Login failed');
    }
  };

  return (
    <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <form onSubmit={onSubmit}>
        <TextField label="Email" name="email" fullWidth margin="normal" onChange={onChange} />
        <TextField label="Password" type="password" name="password" fullWidth margin="normal" onChange={onChange} />
        <Button variant="contained" type="submit" sx={{ mt: 2 }}>Login</Button>
      </form>
      <Button variant="text" onClick={() => router.push('/signup')} sx={{ mt: 2 }}>
        Sign Up
      </Button>
    </Layout>
  );
}
