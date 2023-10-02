<<<<<<< HEAD
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install 
#react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# start app
=======
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install 
#react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# start app
>>>>>>> 927addedd8d2d079fc0f151c2bc519748424b738
CMD ["npm", "start"]