import React from 'react';
import Profile from './Profile';
import './Profiles.css';

const profiles = [
  {
    name: 'Urmila',
    job: 'Farmer',
    address: 'XYZ',
    image: 'https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?cs=srgb&dl=agriculture-barn-clouds-235725.jpg&fm=jpg',
  },
  {
    name: 'Vimla',
    job: 'Farmer',
    address: 'ABC',
    image: 'https://images.pexels.com/photos/259280/pexels-photo-259280.jpeg?cs=srgb&dl=crop-cropland-environment-259280.jpg&fm=jpg',
  },
  {
    name: 'Jay Prakash',
    job: 'Farmer',
    address: 'DEF',
    image: 'https://th.bing.com/th/id/OIP.XAvFszCOlFKdsRQeOl74EAAAAA?rs=1&pid=ImgDetMain',
  },
  {
    name: 'Pramila',
    job: 'Farmer',
    address: 'HIJ',
    image: 'https://th.bing.com/th/id/OIP.lrErciCO4G8izD2Tek6pjQHaF7?rs=1&pid=ImgDetMain',
  },
];

function App() {
  return (
    <div className="container profile-page">
      <div className="row">
        {profiles.map((profile, index) => (
          <Profile
            key={index}
            name={profile.name}
            job={profile.job}
            address={profile.address}
            image={profile.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
