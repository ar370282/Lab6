const projects = require("../data/projects.json");

exports.handler = async () => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(projects)
  };
};
