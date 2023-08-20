import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <h1>À propos</h1>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore modi
        provident voluptatum, explicabo sit cupiditate cum repudiandae eligendi
        blanditiis ipsa esse incidunt vel, odit consectetur necessitatibus
        omnis. Voluptate, impedit iste!
      </p>
      <br />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, eveniet
        quaerat a nostrum alias, consequatur tempore dolorem reprehenderit
        maiores, nemo et. Maxime recusandae autem necessitatibus quos odio quo
        beatae consequuntur.
      </p>
    </div>
  );
};

export default About;
