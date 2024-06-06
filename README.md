# Newsroom Dojo

[![npm version](https://badge.fury.io/js/%40jerseywonder%2Fnewsroom-dojo.svg)](https://badge.fury.io/js/%40jerseywonder%2Fnewsroom-dojo)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

`newsroom-dojo` is a collection of helpful utility functions designed to assist with common tasks in a newsroom. It includes functions for wrangling data, loading data, and other everyday project needs.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  - [Schema Functions](#schema-functions)
  - [Array Functions](#array-functions)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install the package via npm:

```bash
npm install newsroom-dojo

## schema-functions

import { schema } from 'newsroom-dojo/dist/schema/index.js';
import { contains, getJson } from 'newsroom-dojo/dist/index.js'

// Example usage

;(async ()=>{

    try {

      // Load json data      
      let googledoc = await getJson("https://interactive.guim.co.uk/docsdata/11LFp54PIb08Cqu6fBpQGDcQ15enT2F-9HsO8kokXbfQ.json")

      // Pass json into the schema function
      let structure = await schema(googledoc.sheets.data)

    } catch (error) {
      console.error(error);
    }

})()

// Outputs info about the data which is useful for building charts, graphics, and tables

[
    {
        "column": "2005",
        "index": 0,
        "label": "2005",
        "dataTypes": [
            "number"
        ],
        "formats": [
            {
                "type": "number",
                "format": {
                    "min": 50.4,
                    "max": 73,
                    "scale": "scaleLinear",
                    "hasEmptyValues": false,
                    "sequential": false
                }
            }
        ]
    },
    {
        "column": "2023",
        "index": 1,
        "label": "2023",
        "dataTypes": [
            "number"
        ],
        "formats": [
            {
                "type": "number",
                "format": {
                    "min": 56.9,
                    "max": 77.4,
                    "scale": "scaleLinear",
                    "hasEmptyValues": false,
                    "sequential": false
                }
            }
        ]
    },
    {
        "column": "2024",
        "index": 2,
        "label": "2024",
        "dataTypes": [
            "number"
        ],
        "formats": [
            {
                "type": "number",
                "format": {
                    "min": 50.4,
                    "max": 73,
                    "scale": "scaleLinear",
                    "hasEmptyValues": false,
                    "sequential": false
                }
            }
        ]
    },
    {
        "column": "2025",
        "index": 3,
        "label": "2025",
        "dataTypes": [
            "number"
        ],
        "formats": [
            {
                "type": "number",
                "format": {
                    "min": 56.9,
                    "max": 77.4,
                    "scale": "scaleLinear",
                    "hasEmptyValues": false,
                    "sequential": false
                }
            }
        ]
    },
    {
        "column": "Country",
        "index": 4,
        "label": "Country",
        "dataTypes": [
            "string"
        ],
        "formats": [
            {
                "type": "string",
                "format": {
                    "hasRepeat": false,
                    "longest": 9,
                    "scale": "scaleOrdinal"
                }
            }
        ]
    }
]
