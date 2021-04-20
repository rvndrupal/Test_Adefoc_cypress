import test_PO from '../../support/pageObjects/Adefoc/test_PO'
/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Proyecto Adefoc Modulo uno', () =>{ 

    const master= new test_PO()
    let numero_animales=3
    let numero_pruebas=2

    //master.visitHome(500)
    
   
    it('Antirrabica', () =>{
      
        master.Antirrabica(600,numero_animales,numero_pruebas)
        
    })

    it('Brucelosis', () =>{
      
        master.Brucelosis(600,numero_animales,numero_pruebas)
        
    })

    it('Garrapaticida', () =>{
      
        master.Garrapaticida(600,numero_animales,numero_pruebas)
        
    })

    it('Brucelosis', () =>{
      
        master.Brucelosis(600,numero_animales,numero_pruebas)
        
    })

    it.only('Tuberculosis', () =>{
      
        master.Tuberculosis(600,numero_animales,numero_pruebas)
        
    })

    
});