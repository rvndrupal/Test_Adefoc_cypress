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
                       echo"Uno primero"
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent1_2"
                    }
                    steps {
                       echo"Se arranca el segundo en pararlelo"
                    
                    }
                }

                 stage('Slave 3') {
                    agent {
                        label "principal"
                    }
                    steps {
                       echo"Se arranca el principal de todos"
                    
                    }
                }
   
                  
            }

             
        }

    }
            
}