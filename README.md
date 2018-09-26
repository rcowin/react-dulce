# react-dulce

A small library that supports creation of lightweight react components to handle things like conditions in a way that adds a lightweight dsl to the tags.

This initial release has a single `createConditionals` function to create conditional components in a react render function.

## Why

The intent of this package was to help readability of multiline conditionals and others javascript constructs in jsx code. The goal was to pull the domain information out to the tag/component name in a way that POCs could not. The Usage section should help clarify this

## Installation

  ```bash
  npm i react-dulce
  ```
  
  or
  

  ```bash
  yarn add react-dulce
  ```

## Usage

  ```jsx
  import { createConditionals } from 'react-dulce';

  const function Song( { music } ) {
    
    //You can use 'If', 'When', or any valid component name instead of 'Is'.
    const Is = createConditionals({
      playing: music.isPlaying,
      repeating: music.isRepeating
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
    )
  }
  ```
