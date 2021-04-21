pipeline {
    agent any

    tools {nodejs "node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent1_1"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Test_Adefoc_cypress.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 3313dcb4-bec7-4652-8872-3d77817d4099  --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent2_1"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Test_Adefoc_cypress.git'
                        bat 'npx cypress run cypress run --record --key 3313dcb4-bec7-4652-8872-3d77817d4099  --parallel'
                                              
                    }
                }

               

                
                
                  
            }

             
        }

    }
            
}