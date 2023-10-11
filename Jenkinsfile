pipeline {
    agent any
    environment {
        IMAGE_NAME = 'portfolio'
        IMAGE_TAG = 'latest'
        DOCKER_USERNAME = 'patriciohg'
        DOCKER_PASSWORD = 'PASSWORD'
        CONTAINER_NAME = 'portfolio_container'
        NETWORK_NAME = 'nginx_network'
    }
    stages {
        stage('Setup Environment') {
            steps {
                script {
                    def networkExists = sh(script: "docker network ls | grep ${NETWORK_NAME}", returnStatus: true)
                    if(networkExists != 0) {
                        sh "docker network create ${NETWORK_NAME}"
                    }
                }
            }
        }
        stage('Build') {
            steps {
                sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
            }
        }
        stage('Login') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub_credentials', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                    sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
                }
            }
        }
        stage('Push to Registry') {
            steps {
                sh 'docker tag $IMAGE_NAME:$IMAGE_TAG $DOCKER_USERNAME/$IMAGE_NAME:$IMAGE_TAG'
                sh 'docker push $DOCKER_USERNAME/$IMAGE_NAME:$IMAGE_TAG'
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    def containerRunning = sh(script: "docker ps --filter name=${CONTAINER_NAME} -q", returnStatus: true)
                    if(containerRunning == 0) {
                        sh "docker rm -f ${CONTAINER_NAME}"
                    }
                }
                sh """
                    docker run -d --name ${CONTAINER_NAME} --network ${NETWORK_NAME} -e "NGINX_ENVSUBST_OUTPUT_DIR=/etc/nginx" -p 3000:80 -d --restart=always $DOCKER_USERNAME/$IMAGE_NAME:$IMAGE_TAG
                """
            }
        }
    }
    post {
        always {
            sh 'docker logout'
        }
    }
}
