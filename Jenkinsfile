pipeline {
    //agent { docker { image 'node:8.11.1' } }
    agent any
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

        stage('npm run test') {
            steps {
                sh 'npm run test'
            }
        }

        stage('npm run docker-build') {
            steps {
                sh 'npm run docker-build'
            }
        }

        stage('npm run docker-push') {
            steps {
              sh """
                sudo docker tag node_react_bootstrap atulsm/node_react_bootstrap
                sudo docker login --username atulsm --password ${env.DOCKERHUB_PASS}
                sudo docker push atulsm/node_react_bootstrap
              """
            }
        }

    }
}
