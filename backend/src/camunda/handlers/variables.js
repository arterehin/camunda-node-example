module.exports = (camunda) => {
  camunda.subscribe('process.variables', async function({ task, taskService }) {
    // Put your business logic
    // complete the task
    await taskService.complete(task);
  });
}