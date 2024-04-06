assert = require("assert");
Task = require("../models/Task");

describe("Task", () => {
    it(" completed", async () => {
        const task = new Task({ title: "Test task" });
        await task.save();
        await Task.findByIdAndUpdate(task._id, { isCompleted: true });
        const updatedTask = await Task.findById(task._id);
        assert(updatedTask.isCompleted === true);
    });
}
);
