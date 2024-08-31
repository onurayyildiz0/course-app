import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';
import Courses from './Courses'

function App() {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3001/courses');
      setCourses(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }

    debugger;
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteCourse = (id) => {
    const deletedCourses = courses.filter((item) => item.id !== id)
    setCourses(deletedCourses)

  }

  return (
    <div className="p-6">
      {loading ? (
        <Loading />
      ) : (
        <>
          {courses.length === 0 ? (
            <div className="text-center p-8 bg-gray-100 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Kurslarınızın hepsini sildiniz</h2>
              <button
                onClick={() => fetchData()}
                className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
              >
                Yenile
              </button>
            </div>
          ) : (
            <Courses courses={courses} onDelete={deleteCourse} />
          )}
        </>
      )}
    </div>

  );
}

export default App;
