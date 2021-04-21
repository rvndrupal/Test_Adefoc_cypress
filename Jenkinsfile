pipeline {
    agent any

    tools {nodejs "node"}

    stages {

         stage('Slave 3') {
                    agent {
                        label "Principal"
                    }
                    steps {
                       echo"Se arranca el principal de todos"
                    
                    }
        }


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

                
                  
            }

             
        }

    }
            
}