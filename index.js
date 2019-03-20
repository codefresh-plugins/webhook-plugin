const request = require('request');
const config = require('./config');

function validate() {
  if (!config.url) {
    console.error('WEBHOOK_URL variable should exist');
    process.exit(1);
  }
}

function resolveAuth() {
  if (config.token) {
    return {
      bearer: config.token,
    };
  }

  if (config.username && config.password) {
    return {
      user: config.username,
      pass: config.password,
    };
  }

  return false;
}

function resolveQuery() {
  return {};
}

function sendMessage() {
  const qs = resolveQuery();

  const options = {
    url: config.url,
    method: config.method,
    qs,
  };

  if (config.headers) {
    options.headers = config.headers;
  }

  const auth = resolveAuth();
  if (auth) {
    options.auth = auth;
  }

  request(options, (error, response, body) => {
    console.error(error);
    console.log(response.statusCode);
    console.log(JSON.stringify(body));
  });
}

validate();
sendMessage();

console.log(JSON.stringify(process.env, null, 4));




