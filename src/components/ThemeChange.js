import React from 'react';

const ThemeChange = ({ onThemeChange }) => {
  return (
    <div className="themes">
      <button className="theme theme1" name="theme1" onClick={onThemeChange} />
      <button className="theme theme2" name="theme2" onClick={onThemeChange} />
      <button className="theme theme3" name="theme3" onClick={onThemeChange} />
      <button className="theme theme4" name="theme4" onClick={onThemeChange} />
    </div>
  );
};

export default ThemeChange;
