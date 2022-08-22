pipeline {
    agent any
    stages {
        stage('test') {
            steps {
                sh 'docker build -t puppeteer-chrome-linux .'
                sh ' docker run -i --init --rm --cap-add=SYS_ADMIN --name puppeteer-chrome puppeteer-chrome-linux node -e "`npm test`"'
            }
        }
    }
}