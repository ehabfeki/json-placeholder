# json-placeholder

[![Build Status](http://35.180.178.89:8080/buildStatus/icon?job=json-placeholder)](http://35.180.178.89:8080/job/json-placeholder/)
<a href='http://35.180.178.89:8080/job/json-placeholder/'><img src='http://35.180.178.89:8080/buildStatus/icon?job=json-placeholder'></a>

This is a simple automation for running tests

#### Run test:
```
docker build -t puppeteer-chrome-linux .
docker run -i --rm --init --cap-add=SYS_ADMIN --name puppeteer-chrome puppeteer-chrome-linux
```

#### Jenkins:
CI will be triggered for each push on json-placeholder

#### Technical description
Test will fetch data from ```https://jsonplaceholder.typicode.com/comments```
    - First data fetch will be from callback using supertest
    - Second data fetch will be from UI using puppeteer