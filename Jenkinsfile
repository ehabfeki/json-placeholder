pipeline {
    agent any
    stages {
        stage('install') {
            steps {
                sh 'npm i'
            }
        }
        stage('test') {
            steps {
                sh 'npm run test'
            }
        }
    }
}