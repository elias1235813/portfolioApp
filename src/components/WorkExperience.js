import React from 'react';

const WorkExperience = () => {
  const work = [
    {
      id: 1,
      title: 'Ambassador',
      year: '2018-2019',
      description:
        'Ambassador for wildlife conservation',
    },
    {
        id: 2,
        title: 'Bamboo quality specialist',
        year: '2020-2021',
        description:
          'Inspecting and researching the quality of bamboo',
      },
    {
        id: 3,
        title: 'Therapeutic companion',
        year: '2022',
        description:
          'Emotional support for a human',
    }
  ];

  return (
    <div className="Work experience container mt-5">
      <h2 className="mb-4">Work Experience</h2>
      <div className="row">
        {work.map((work) => (
          <div className="col-md-6 col-lg-4 mb-4" key={work.id}>
            <div className="card h-100 shadow">
              <div className="card-header">
                <h5 className="card-title mb-0">{work.title}</h5>
              </div>
              <div className="card-body">
                <p className="card-text">{work.description}</p>
              </div>
              <div className="card-footer text-muted">
                <small>{work.year}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;