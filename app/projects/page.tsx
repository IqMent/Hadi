'use client';

import { useState } from 'react';

const projects = [
  {
    title: 'Modern Office Complex',
    category: 'commercial',
    location: 'Downtown Business District',
    year: '2023',
    description: 'A state-of-the-art office complex featuring sustainable design and smart building technology.',
    color: 'bg-green-100',
  },
  {
    title: 'Luxury Residential Tower',
    category: 'residential',
    location: 'Waterfront District',
    year: '2023',
    description: 'Premium residential apartments with panoramic views and world-class amenities.',
    color: 'bg-green-100',
  },
  {
    title: 'City Bridge Project',
    category: 'infrastructure',
    location: 'River City',
    year: '2022',
    description: 'A modern bridge connecting two major districts, improving urban mobility.',
    color: 'bg-green-100',
  },
  {
    title: 'Shopping Mall Complex',
    category: 'commercial',
    location: 'Suburban Area',
    year: '2022',
    description: 'Modern retail space with entertainment facilities and parking infrastructure.',
    color: 'bg-green-100',
  },
  {
    title: 'Eco-Friendly Housing',
    category: 'residential',
    location: 'Green Valley',
    year: '2022',
    description: 'Sustainable residential community with solar power and water recycling systems.',
    color: 'bg-green-100',
  },
  {
    title: 'Metro Station Development',
    category: 'infrastructure',
    location: 'City Center',
    year: '2021',
    description: 'Modern metro station with integrated commercial spaces and accessibility features.',
    color: 'bg-green-100',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <div className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-green-100">
            Showcasing our finest work in construction and development
          </p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full ${
              filter === 'all'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('commercial')}
            className={`px-6 py-2 rounded-full ${
              filter === 'commercial'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            Commercial
          </button>
          <button
            onClick={() => setFilter('residential')}
            className={`px-6 py-2 rounded-full ${
              filter === 'residential'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            Residential
          </button>
          <button
            onClick={() => setFilter('infrastructure')}
            className={`px-6 py-2 rounded-full ${
              filter === 'infrastructure'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            Infrastructure
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className={`h-64 ${project.color} flex items-center justify-center`}>
                <div className="text-4xl font-bold text-gray-700">{project.title.split(' ')[0]}</div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{project.location}</span>
                  <span className="capitalize">{project.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-50 py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can bring your vision to life
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  );
} 