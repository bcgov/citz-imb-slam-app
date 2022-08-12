#!/bin/bash

# script to process slam-api deployment config template and deploy it to a given namespace

oc process -f /home/runner/work/citz-imb-slam-app/citz-imb-slam-app/openshift/templates/citz-imb-slam-app/dc.yaml --namespace=$NAMESPACE \
    -p APPLICATION_NAME=$APPLICATION_NAME \
    -p LICENSE_PLATE=$LICENSE_PLATE \
    -p IMAGE_TAG=$IMAGE_TAG \
    -p ENVIRONMENT=$ENVIRONMENT | \
    oc apply -f -
