pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "node1"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Test_Adefoc_cypress.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --parallel --key 3313dcb4-bec7-4652-8872-3d77817d4099  --spec "cypress/integration/Test_adefoc/Modulo_uno.js  --browser chrome --headed'
                    
                    }
                }
               

               
                

               
                  
            }

             
        }

    }
            
}