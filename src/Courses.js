import React from 'react'
import Course from './Course'

function Courses({ courses, onDelete }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">

            {courses.map((course, index) => (
                <Course key={index} course={course} onDelete={onDelete} />

            ))}
        </div>
    )
}

export default Courses
