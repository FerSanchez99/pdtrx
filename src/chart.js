import React from 'react';
import {PChart, Dataset} from 'pchart';
import who_height_boys_013W from './height_boys_0-13W.json';

const percentiles = [5,25,50,75,95];
const patient = {
  firstname: 'John',
  lastname: 'Smith',
  sex: 'male',
  birthdate: '2018-01-14',
  measures: [
    {
      date: '2018-01-23',
      height: 51
    }
  ]
}
const theme = {
  backdropFill: '#B2EBF2',
  gridColor: '#00ACC1',
  areaColor: 'rgba(0,172,193,.4)'
}
const dataset = new Dataset(who_height_boys_013W, percentiles);

const Example = () => {
  return (
    <PChart width={1200} height={800} dataset={dataset} patients={patient} theme={theme} showtitle showlabels/>
  )
}

export default Example;