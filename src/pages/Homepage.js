import React from 'react';

import Header from '../components/header/Header'
import Slider from '../components/slider/Slider'
import Bio from '../components/bio/Bio'
import NonVerbal from '../components/sections/NonVerbal'
import Verbal from '../components/sections/Verbal'
import Ecrit from '../components/sections/Ecrit'
import Services from '../components/services/Services'
import Temoignages from '../components/temoignages/Temoignages'
import Contact from '../components/contact/Contact'

function Homepage() {

  return (
    <>
    <Header />
    <Slider/>
    <Bio/>
    <NonVerbal/>
    <Verbal/>
    <Ecrit/>
    <Services/>
      <Temoignages />
      <Contact/>
    </>
  )
}

export default Homepage