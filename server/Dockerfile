FROM node:alpine
RUN mkdir -p /home/attendanceManagement/node_modules && chown -R node:node /home/attendanceManagement/
WORKDIR /home/attendanceManagement
COPY --chown=node:node package*.json .
USER node
RUN npm install
COPY --chown=node:node . .
EXPOSE 8080
CMD [ "node", "index.js" ]