# react-dulce
=========
A small library that supports creation of lightweight react components to handle things like conditions in a way that adds a lightweight dsl to the tags.

This initial release has a single createConditionals function to create conditional components in a react render function.

## Installation

  `npm install react-dulce -S`
  or
  `yarn add react-dulce -S`

## Usage

  import { createConditionals } from import 'react-dulce';


  const function Song( { music } ) {

    //You can use 'If', 'When', or any valid component name instead of 'Is'.
    var Is = createConditionals({
      playing = music.isPlaying,
      repeating = music.isRepeating
    });

    return (
      <div>
        <Is.playing>
          <div>
            Playing
          </div>
        </Is.playing>
        <Is.not.playing>
          <div>
            Not Playing
          </div>
        </Is.not.playing>
        <Is.not.repeating>
          <RepeatButton/>
        </Is.not.repeating>
      </div>

  
  


