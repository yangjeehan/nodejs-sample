pipeline {
  agent {
    docker {
      image 'vtest:v1'
    }

  }
  stages {
    stage('build') {
      steps {
        sh 'npm install '
      }
    }
  }
}