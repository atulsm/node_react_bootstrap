pipeline {
    //agent { docker { image 'node:8.11.1' } }
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
