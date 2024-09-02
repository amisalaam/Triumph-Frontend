import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useAuth } from "../../context/AuthProvider";
import Swal from 'sweetalert2';
import _ from 'lodash';


function AllTickets() {
    const apiUrl = import.meta.env.VITE_API_URL;
    const [tickets, setTickets] = useState([]);
    const [status, setStatus] = useState('');
    const [priority, setPriority] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { authTokens } = useAuth();

    // Debounced function to fetch tickets
    const fetchTickets = useCallback(
        _.debounce(async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`${apiUrl}/api/tickets/`, {
                    params: {
                        status: status,
                        priority: priority,
                    },
                    headers: {
                        Authorization: `Bearer ${authTokens.accessToken}`,
                    },
                });
                setTickets(response.data);
    
                Swal.fire({
                    title: 'Success!',
                    text: 'Tickets fetched successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            } catch (error) {
                setError('Error fetching tickets.');
    
                Swal.fire({
                    title: 'Error!',
                    text: 'There was an issue fetching tickets.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            } finally {
                setLoading(false);
            }
        }, 500), [status, priority, apiUrl, authTokens.accessToken]
    );
    

    // Fetch tickets when filters change
    useEffect(() => {
        fetchTickets();
    }, [fetchTickets]);

    return (
        <div className="p-4 sm:ml-64">
            <div className="md:p-10 rounded-lg mt-14">
                <div className="relative overflow-x-auto sm:rounded-lg">
                    <h1 className="mt-5 text-4xl font-bold">All Tickets</h1>
                    <div className="flex justify-between my-10">
                        <div className="flex space-x-4">
                            {/* Filters */}
                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="p-2 bg-white border border-gray-300 rounded"
                            >
                                <option value="">All Statuses</option>
                                <option value="open">Open</option>
                                <option value="in-progress">In Progress</option>
                                <option value="resolved">Resolved</option>
                            </select>
                            <select
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                                className="p-2 bg-white border border-gray-300 rounded"
                            >
                                <option value="">All Priorities</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                    </div>

                    {loading && <p>Loading...</p>}
                    {error && <p className="text-red-500">{error}</p>}

                    {!loading && !error && tickets.length === 0 && (
                        <p className="text-center text-gray-500">No tickets found.</p>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {tickets.map(ticket => (
                            <div key={ticket.id} className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{ticket.title}</div>
                                    {/* Ensure a minimum height for the description area */}
                                    <div className="min-h-[6rem]">
                                        <TicketDescription description={ticket.description} />
                                    </div>
                                </div>
                                <div className="px-6 pt-4 pb-2 flex justify-between">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        Priority: {ticket.priority}
                                    </span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        Status: {ticket.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

const TicketDescription = ({ description }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <p className={`text-gray-700 text-base ${isExpanded ? '' : 'line-clamp-3'}`}>
                {description}
            </p>
            {description.split(' ').length > 20 && (
                <button onClick={toggleDescription} className="text-blue-500 mt-2">
                    {isExpanded ? 'Show Less' : 'Show More'}
                </button>
            )}
        </div>
    );
};

export default AllTickets;
