import React from 'react';
import Project from './Project';

const projects = [
    {
        id: 1,
        name: "",
        img:"" ,
        repoURL: "",
        deployURL: ""
    },
    {
        id: 2,
        name: "",
        img: ,
        repoURL: "",
        deployURL: ""
    },
    {
        id: 3,
        name: "",
        img: noteTakerImg,
        repoURL: "",
        deployURL: "h"
    },
]

export default function Portfolio() {
    return (
      <div>
        <h1>Coding Portfolio</h1>
        <Project projects = { projects } />
      </div>
    );
  }