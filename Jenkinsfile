pipeline {
    agent any

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
                        bat 'npx cypress run --record --key 3313dcb4-bec7-4652-8872-3d77817d4099  --spec "cypress/integration/Test_adefoc/Modulo_uno.js --parallel --browser chrome --headed'
                    
                    }
                }
                stage('Slave 2') {
                    agent {
                        label "Agent1_2"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Test_Adefoc_cypress.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 3313dcb4-bec7-4652-8872-3d77817d4099  --spec "cypress/integration/Test_adefoc/Modulo_uno.js --parallel --browser chrome --headed'


                    }
                }

                stage('Slave 3') {
                    agent {
                        label "Agent1_3"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Test_Adefoc_cypress.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 3313dcb4-bec7-4652-8872-3d77817d4099  --spec "cypress/integration/Test_adefoc/Modulo_uno.js --parallel --browser chrome --headed'


                    }
                }

                stage('Slave 4') {
                    agent {
                        label "Agent1_4"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Test_Adefoc_cypress.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 3313dcb4-bec7-4652-8872-3d77817d4099  --spec "cypress/integration/Test_adefoc/Modulo_uno.js --parallel --browser chrome --headed'


                    }
                }

                stage('Slave 5') {
                    agent {
                        label "Agent1_5"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Test_Adefoc_cypress.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 3313dcb4-bec7-4652-8872-3d77817d4099  --spec "cypress/integration/Test_adefoc/Modulo_uno.js --parallel --browser chrome --headed'


                    }
                }

               
                  
            }

             
        }

    }
            
}