pipeline {
    agent any

    stages {

        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://luniticmush.github.io/FutureXcel/'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t FX-portfolio .'
            }
        }

        stage('Remove Old Container') {
            steps {
                bat 'docker rm -f FX-container || exit 0'
            }
        }

        stage('Run Website') {
            steps {
                bat 'docker run -d -p 80:80 --name FX-container FX-portfolio'
            }
        }
    }
}