pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/dsabalete/davidsabalete.com', branch: 'dev')
      }
    }

    stage('Log') {
      parallel {
        stage('Log') {
          steps {
            sh 'ls -la'
          }
        }

        stage('Front-End Unit Tests') {
          steps {
            sh '''pwd
cd davidsabalete\\.com && npm i && npm run lint'''
          }
        }

      }
    }

  }
}