import React, { useState } from 'react';

const Social = () => {
  const [socialPlatforms, setSocialPlatforms] = useState([{ name: '', link: '' }]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const platforms = [...socialPlatforms];
    platforms[index][name] = value;
    setSocialPlatforms(platforms);
  };

  const handleAddPlatform = () => {
    setSocialPlatforms([...socialPlatforms, { name: '', link: '' }]);
  };

  const handleRemovePlatform = (index) => {
    const platforms = [...socialPlatforms];
    platforms.splice(index, 1);
    setSocialPlatforms(platforms);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = JSON.stringify(socialPlatforms);
    console.log(data); // You can store or process the JSON data here
  };

  return (
    <form onSubmit={handleSubmit}>
      {socialPlatforms.map((platform, index) => (
        <div key={index}>
          <input
            type="text"
            name="name"
            value={platform.name}
            onChange={(e) => handleInputChange(index, e)}
            placeholder="Platform name"
          />
          <input
            type="text"
            name="link"
            value={platform.link}
            onChange={(e) => handleInputChange(index, e)}
            placeholder="Platform link"
          />
          <button onClick={() => handleRemovePlatform(index)}>Remove</button>
        </div>
      ))}
      <button onClick={handleAddPlatform}>Add Social</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Social;
