import React from 'react';

function AllTokens() {
    return (
        <div className="p-4 sm:ml-64">
            <div className="md:p-10 rounded-lg mt-14">
                <div className="relative overflow-x-auto sm:rounded-lg">
                    <h1 className="mt-5 text-2xl">All Tickets</h1>
                    <div className="flex justify-end mb-5">
                        <div className="flex">
                            {/* Add any controls or filters here */}
                        </div>
                    </div>

                    <div>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllTokens;
