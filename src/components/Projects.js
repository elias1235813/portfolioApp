import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Bamboo forest conservation project',
      year: '2017-2018',
      description:
        'Planting bamboo, removing invasive species, educating the public',
    },
    {
      id: 2,
      name: 'Panda art project',
      year: '2019-2020',
      description:
        'Creating paintings of other pandas',
    }
  ];

  return (
    <div className="Projects container mt-5">
      <h2 className="mb-4">Projects</h2>
      <div className="row">
        {projects.map((projects) => (
          <div className="col-md-6 col-lg-4 mb-4" key={projects.id}>
            <div className="card h-100 shadow">
              <div className="card-header">
                <h5 className="card-title mb-0">{projects.name}</h5>
              </div>
              <div className="card-body">
                <p className="card-text">{projects.description}</p>
              </div>
              <div className="card-footer text-muted">
                <small>{projects.year}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;