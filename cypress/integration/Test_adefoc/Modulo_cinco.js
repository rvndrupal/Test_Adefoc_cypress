import test_PO from '../../support/pageObjects/Adefoc/test_PO'
/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Proyecto Adefoc Modulo cuatro', () =>{ 

    const master= new test_PO()
    let numero_animales=2
    let numero_pruebas=1
    let tiempo_general=1300

    //master.visitHome(500)
    
   
    it('Antirrabica', () =>{
      
        master.Antirrabica(1100,numero_animales,numero_pruebas)
        
    })

    it('Brucelosis', () =>{
      
        master.Brucelosis(1100,numero_animales,numero_pruebas)
        
    })

    it('Garrapaticida', () =>{
      
        master.Garrapaticida(1100,numero_animales,numero_pruebas)
        
    })

    it('Dictamen_Brucelosis', () =>{
      
        master.Dictamen_Brucelosis(800,numero_animales,numero_pruebas)
        
    })

    it.only('Tuberculosis', () =>{
      
        master.Tuberculosis(tiempo_general,numero_animales,numero_pruebas)
        
    })

    
});