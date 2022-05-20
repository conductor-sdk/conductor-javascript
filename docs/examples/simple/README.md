# Prerequisites

Ensure that `simple.task.json` and `simple.worfklow.json` have been uploaded to your conductor server. For example:

```shell
# when run from the directory containing this README
curl -X POST  --header "Content-Type: application/json" http://localhost:8080/api/metadata/taskdefs -d @./simple.task.json
curl -X POST  --header "Content-Type: application/json" http://localhost:8080/api/metadata/workflow -d @./simple.workflow.json
```

# Running

In a terminal, run:

```shell
# ensure node is installed
# cd into this directory
npm i
npm start
# Alternately, you can run `npm link ../../..` to use the current repository.
```

Then in another shell, run:

```shell
curl -X POST --header "Content-Type: application/json" http://localhost:8080/api/workflow -d '{ "name": "first_sample_workflow_with_worker"}'
```
