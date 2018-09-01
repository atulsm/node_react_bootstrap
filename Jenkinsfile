pipeline {
    //agent { docker { image 'node:8.11.1' } }
    //agent any
    stages {
        stage('npm install') {
            steps {
                sh 'npm install'
            }
        }

        stage('npm run build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
