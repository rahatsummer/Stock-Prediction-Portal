import axios from 'axios';
import React, { useEffect } from 'react';
import axiosInstance from '../../axiosInstance';

const Dashboard = () => {
  

  useEffect(() => {
    const fetchProtectedData = async () => {
     
      try {
        const response = await axiosInstance.get('/protected-view');  
       
        console.log('Successful', response.data);
      } catch (error) {
        console.error('Error fetching data', error.response?.status, error.response?.data);
      }
    };

    fetchProtectedData();
  }, []);

  return <div className="text-light container">Dashboard</div>;
};

export default Dashboard;
