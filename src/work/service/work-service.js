import db from "../../config/db.js";
import asyncHandler from "express-async-handler";

let getAll = asyncHandler(async (req, res) => {
  try {
    let work = await db.models.Work.findAll();
    console.log(work);
    res.status(200).json(work);
  } catch (error) {
    console.error("Error in getAll:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const addWork = asyncHandler(async (req, res) => {
  try {
    const { title, image, link } = req.body;

    await db.models.Work.create({
      title: title,
      image: image,
      link: link,
    });

    res.status(200).json({
      type: "succes",
      payload: "Work has been successfully added.",
    });
  } catch (error) {
    console.error("An error occured while adding the work:", error);

    res.status(500).json({
      type: "error",
      payload: "an error occurred while adding the work.",
    });
  }
});

let deleteWork = asyncHandler(async (req, res) => {
  let id = req.params.id;
  let work = await db.models.Work.findByPk(id);
  console.log(id, "this is my work");

  if (work) {
    await work.destroy();
    res.status(200).json({ message: "Work has been successfully deleted." });
  } else {
    res.status(400).json({ error: "Could not delete this work." });
  }
});

const updateWork = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id, "this is id");

  const work = await db.models.Work.findByPk(id);

  let obj = req.body.work;
  console.log(obj, "this is my obj");

  if (obj.title != "") {
    work.title = obj.title;
  }

  if (obj.image != "") {
    work.image = obj.image;
  }

  if (obj.link != "") {
    work.link = obj.link;
  }

  await work.save();

  res.status(200).json("Work has been successfully updated");
});

const getWorkById = asyncHandler(async (req, res) => {
  let { id } = req.params;
  let work = await db.models.Work.findByPk(id);

  console.log(id, "this is id");
  console.log(work, "this is work");

  if (!work) {
    res.status(404).json({ message: "Cannot find work" });
    return;
  }

  res.status(200).json(work);
});

export { getAll, addWork, deleteWork, updateWork, getWorkById };
