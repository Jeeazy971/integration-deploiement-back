FROM node:20.16

WORKDIR ./app

COPY jsdoc.config.json module.js module.test.js package-lock.json package.json .babelrc ./

RUN npm install

COPY . ./

CMD ['npm', 'run', 'jest']