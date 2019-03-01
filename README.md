Simple browser/node module to generate a dummy wav file of a specific duration. The wav file contains only white noise.

## Installation
    $ npm install wav-dummy

## Usage
    const wavDummy = require('wav-dummy');

	// Generates a 10 second wav file
	const wavFile = wavDummy(10)

## API
    wavDummy(duration: number): ArrayBuffer