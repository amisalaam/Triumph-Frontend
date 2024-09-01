import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from "../../context/AuthProvider";
import Swal from 'sweetalert2';

function TokenDetailModal({ tokenId, onClose, onTokenUpdate, onTokenDelete }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('low');
    const [status, setStatus] = useState('open');
    const { authTokens } = useAuth();

    useEffect(() => {
        const fetchTokenDetails = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/tickets/${tokenId}/`, {
                    headers: {
                        Authorization: `Bearer ${authTokens.accessToken}`,
                    },
                });
                const tokenData = response.data;
                setTitle(tokenData.title);
                setDescription(tokenData.description);
                setPriority(tokenData.priority);
                setStatus(tokenData.status);
            } catch (error) {
                console.error('Error fetching token details:', error);
            }
        };

        fetchTokenDetails();
    }, [tokenId, authTokens]);

    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`${import.meta.env.VITE_API_URL}/api/tickets/${tokenId}/`, {
                title: title,
                description: description,
                priority: priority,
                status: status,
            }, {
                headers: {
                    Authorization: `Bearer ${authTokens.accessToken}`,
                },
            });
            console.log(response.data);
            onTokenUpdate(response.data);
            onClose();
        } catch (error) {
            console.error('Error updating token:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/api/tickets/${tokenId}/`, {
                headers: {
                    Authorization: `Bearer ${authTokens.accessToken}`,
                },
            });
            Swal.fire({
                icon: 'success',
                title: 'Token deleted',
                text: 'The token has been successfully deleted.',
            });
            onTokenDelete(tokenId);
            onClose();
        } catch (error) {
            console.error('Error deleting token:', error);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
                <div className="flex justify-between items-center border-b pb-3">
                    <h2 className="text-xl font-semibold text-gray-800">Token Details</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <form onSubmit={handleUpdate} className="mt-4">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Priority</label>
                        <select
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            required
                        >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Status</label>
                        <select
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            required
                        >
                            <option value="open">Open</option>
                            <option value="in-progress">In Progress</option>
                            <option value="resolved">Resolved</option>
                        </select>
                    </div>

                    <div className="flex justify-between">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            Update Token
                        </button>
                        <button type="button" onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                            Delete Token
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TokenDetailModal;
