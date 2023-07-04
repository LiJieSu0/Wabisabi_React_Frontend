pipeline {
  agent any
  stages {
    stage('Check out') {
      steps {
        git(url: 'https://github.com/LiJieSu0/Wabisabi_React_Frontend', branch: 'master')
      }
    }

    stage('Shell Scripts') {
      steps {
        sh 'ls -la'
      }
    }

  }
}