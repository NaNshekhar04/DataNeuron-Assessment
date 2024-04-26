import { useState } from 'react';
import axios from 'axios';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
// import {ToastContainer } from 'react-toastify';

const ComponentGrid1 = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        designation: '',
        phoneNo: ''
    });
    const layoutConfig = [
        { i: 'item1', x: 0, y: 0, w: 4, h: 10},
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/api/addUser', formData);
            setFormData({
                name: '',
                email: '',
                designation: '',
                phoneNo: ''
            });
            window.location.reload();
        } catch (error) {
            console.error('Error adding user:', error);
            console.log('Not Added');
        }
    };


    return (
        <GridLayout className="component-layout-1" layout={layoutConfig} cols={12} rowHeight={40} width={1200}>
            <div key="item1" style={{ background: '#ff4d4f' }}>
                <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input type="text" name="designation" value={formData.designation} onChange={handleChange} placeholder="Designation" required />
            <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} placeholder="Phone Number" required />
            <button type="submit">Add</button>
        </form>
            </div>
        </GridLayout>
    );
};

export default ComponentGrid1;