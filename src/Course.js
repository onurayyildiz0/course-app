import React from 'react';

function Course({ course, onDelete }) {

    const handleDelete = () => {
        onDelete(course.id);
    };

    return (
        <div className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
                <h1 className="text-2xl font-semibold text-gray-900 mb-2">{course.title}</h1>
                <p className="text-gray-700 mb-4">{course.content}</p>
                <p className="text-lg font-bold text-indigo-600">{course.price}</p>
            </div>
            <div className="bg-gray-100 p-4 text-right">
                <button
                    onClick={handleDelete}
                    className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-200"
                >
                    Sil
                </button>
            </div>
        </div>
    );
}

export default Course;
