import SubTask from "../models/subTaskModel.js";

export const createSubTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const { task_id } = req.params;

    const subTask = new SubTask({ task_id, title, description, status });
    await subTask.save();

    res.json({ message: "SubTask created successfully", subTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Get all user subtasks with filters
export const allUsersSubTasks = async (req, res) => {
  try {
    const { task_id } = req.params;

    const subTasks = await SubTask.find({ task_id, deleted_at: null });
    res.json({ subTasks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// update subtask
export const updateSubTask = async (req, res) => {
  try {
    const { subtask_id } = req.params;
    const { status } = req.body;

    await SubTask.findByIdAndUpdate(subtask_id, { status }, { new: true });

    res.json({ message: "SubTask successfully updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Delete SubTask API
export const deleteSubTask = async (req, res) => {
  try {
    const { subtask_id } = req.params;

    await SubTask.findByIdAndUpdate(subtask_id, { deleted_at: new Date() });

    res.json({ message: "SubTask deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
