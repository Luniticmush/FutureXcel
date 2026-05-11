pipeline {
    agent any

    stages {

        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/luniticmush/FutureXcel.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t futurexcel-website .'
            }
        }

        stage('Remove Old Container') {
            steps {
                bat 'docker rm -f futurexcel-container || exit 0'
            }
        }

        stage('Run Website') {
            steps {
                bat 'docker run -d -p 8081:80 --name futurexcel-container futurexcel-website'
            }
        }
    }
}
