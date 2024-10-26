import React, { useState } from 'react';
import axios from 'axios'; // For making HTTP requests
import SweetAlert from 'sweetalert2';
import './Admin.css';
import Footer from '../Footer/Footer';
function AdminPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handlePostContent = async () => {
    try {
      const response = await axios.post('YOUR_API_ENDPOINT_HERE', {
        title,
        description,
      });
      
      if (response.status === 200) {
        SweetAlert.fire('Success!', 'Content posted successfully!', 'success');
        setTitle('');
        setDescription('');
      }
    } catch (error) {
      SweetAlert.fire('Error!', 'Failed to post content!', 'error');
      console.error('Error posting content:', error);
    }
  };

  return (
    <>
    <div className="admin-page">
     <br></br> <br></br>  <br></br>
     <h1>Admin Page</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handlePostContent}>Post Content</button>
    </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <Footer/>
    </>
  );
}

export default AdminPage;
