import React from 'react';

const StatsRow = () => {
  const stats = [
    { value: '6', label: 'Avg. Tutor Experience' },
    { value: '500+', label: 'Students Worldwide' },
    { value: '100+', label: 'Satisfied parents' },
    { value: '98%', label: 'Student Satisfaction' },
  ];

  return (
    <section className="bg-gray-50 px-6 md:px-16 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h4 className="md:text-6xl text-5xl font-bold text-blue-600">{stat.value}</h4>
            <p className="text-xl text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsRow;
